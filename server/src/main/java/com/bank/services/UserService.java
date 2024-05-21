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

import java.util.*;

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
        Map<String, Object> response = new HashMap<>();
        Optional<User> optional = userRepository.findByEmail(user.getEmail());

        if(!(optional.isPresent())){
            response.put("status", false);
            response.put("message", optional.get());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        if(!(user.validateCPF())){
            response.put("status", false);
            response.put("message", "Invalid CPF!");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
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

        response.put("status", false);
        response.put("message", "Registered User");
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    public ResponseEntity login(UserDTO user){
        Optional<User> userSearch = userRepository.findByEmail(user.getEmail());
        String encryptPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        Map<String, Object> response = new HashMap<>();

        if(userSearch.isEmpty() || encryptPassword.equals(userSearch.get().getPassword())){
            response.put("status", false);
            response.put("message", "Invalid Credentials");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        cookiesEvent.addCookie("idUser", userSearch.get().getId());

        response.put("status", true);
        response.put("message", "Logged in User");
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(response);
    }
}