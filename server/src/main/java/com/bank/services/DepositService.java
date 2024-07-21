package com.bank.services;

import com.bank.dto.DepositRequest;
import com.bank.entities.Deposit;
import com.bank.entities.Historic;
import com.bank.entities.MessageReturn;
import com.bank.entities.User;
import com.bank.exception.handlers.NoSuchElementException;
import com.bank.repositories.DepositRepository;
import com.bank.repositories.HistoricRepository;
import com.bank.repositories.UserRepository;
import com.bank.util.CookiesEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class DepositService {
    @Autowired
    private DepositRepository depositRepository;

    @Autowired
    private HistoricRepository historicRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CookiesEvent cookiesEvent;

    public List<Deposit> getAll(){
        return depositRepository.findAll();
    }

    public ResponseEntity<MessageReturn> create(DepositRequest depositRequest){
        Long nextId = depositRepository.getNextId();
        String id = cookiesEvent.getValueCookie("idUser");
        Optional<User> userOptional = userRepository.findById("0");

        if(userOptional.isEmpty()){
            throw new NoSuchElementException("User not found");
        }
        User user = userOptional.get();
        Deposit deposit = updateInfosCreationDeposit(user, depositRequest.getValue(), nextId);

        return ResponseEntity.status(HttpStatus.CREATED).body(new MessageReturn(true, deposit.getAuthorization_code()));
    }

    public Deposit updateInfosCreationDeposit(User user, Double amount, Long nextId){
        String formattedId = String.format("%04d", nextId);
        Deposit deposit = new Deposit(0L, user, "DEP" + formattedId, amount, LocalDate.now());
        user.setTotal_value(user.getTotal_value() + amount);

        depositRepository.save(deposit);
        historicRepository.save(new Historic("0", user, LocalDate.now(), user.getTotal_value()));
        userRepository.save(user);

        return deposit;
    }
}
