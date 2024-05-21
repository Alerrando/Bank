package com.bank.services;

import com.bank.dto.UserDTO;
import com.bank.entities.Addresses;
import com.bank.entities.User;
import com.bank.repositories.AddressesRepository;
import com.bank.repositories.UserRepository;
import com.bank.util.CookiesEvent;
import com.nimbusds.openid.connect.sdk.claims.Address;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    public List<UserDTO> getAll(){
        return userRepository.findAll().stream().map(user -> new UserDTO(user)).toList();
    }

    public ResponseEntity create(User user){
        Optional<User> optional = userRepository.findByEmail(user.getEmail());

        if(!(optional.isPresent())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(optional.get());
        }

        if(!(user.validateCPF())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("CPF inválido!");
        }

        Addresses addresses = addressesService.insert(user.getCep());
        addresses.setUser(user);
        user.setAddresses(addresses);
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));

        String id = UUID.randomUUID().toString();
        user.setId(id);

        cookiesEvent.addCookie("idUser", id);
        addressesRepository.save(addresses);
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body("Usuário cadastrado!");
    }

    public ResponseEntity<String> login(UserDTO user){
        Optional<User> userSearch = userRepository.findByEmail(user.getEmail());
        String encryptPassword = new BCryptPasswordEncoder().encode(user.getPassword());

        if(userSearch.isEmpty() || encryptPassword.equals(userSearch.get().getPassword())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Credenciais invalidadas!");
        }

        cookiesEvent.addCookie("idUser", userSearch.get().getId());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body("Usuário logado!");
    }
}