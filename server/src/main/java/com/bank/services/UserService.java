package com.bank.services;

import com.bank.dto.UserDTO;
import com.bank.entities.Addresses;
import com.bank.entities.MessageReturn;
import com.bank.entities.User;
import com.bank.projections.DepositsDetails;
import com.bank.projections.TransactionsDetailsProjectionsImpl;
import com.bank.projections.TransferDetails;
import com.bank.repositories.AddressesRepository;
import com.bank.repositories.UserRepository;
import com.bank.util.CookiesEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddressesService addressesService;

    @Autowired
    private AddressesRepository addressesRepository;

    @Autowired
    private CookiesEvent cookiesEvent;

    @Autowired
    private TokenService tokenService;

    public List<UserDTO> getAll(){
        return userRepository.findAll().stream().map(UserDTO::new).toList();
    }

    public ResponseEntity<MessageReturn> create(User user){
        Optional<User> optional = userRepository.findByEmail(user.getEmail());

        if(optional.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageReturn(false, "User already exists!"));
        }

        if(!(user.validateCPF())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageReturn(false, "Invalid CPF!"));
        }

        Addresses addresses = addressesService.insert(user.getCep());
        addresses.setUser(user);
        user.setAddresses(addresses);
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

        String id = UUID.randomUUID().toString();
        user.setId(id);

        cookiesEvent.addCookie("idUser", id);
        tokenService.generateToken(user);
        addressesRepository.save(addresses);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(new MessageReturn(true, "Registered User"));
    }

    public ResponseEntity<List<TransactionsDetailsProjectionsImpl>> getInfosUser(LocalDate dateStart, LocalDate dateEnd){
        //Long idUser = Long.valueOf(cookiesEvent.getValueCookie("idUser"));
        List<DepositsDetails> depositsDetails = userRepository.getDepDetailsProjections(0L, dateStart, dateEnd);
        List<TransferDetails> transferDetails = userRepository.getWithDetailsProjections(0L, dateStart, dateEnd);
        List<TransactionsDetailsProjectionsImpl> transactionsDetailsProjections = new ArrayList<>();

        for (int i = 0; i < Math.min(depositsDetails.size(), transferDetails.size()); i++) {
            TransactionsDetailsProjectionsImpl projections = new TransactionsDetailsProjectionsImpl();
            projections.setMonth(depositsDetails.get(i).getMonth());
            projections.setDeposits(depositsDetails.get(i).getDeposits());
            projections.setWithdrawals(transferDetails.get(i).getWithdrawals());
            transactionsDetailsProjections.add(projections);
        }

        return ResponseEntity.status(HttpStatus.ACCEPTED).body(transactionsDetailsProjections);
    }
}