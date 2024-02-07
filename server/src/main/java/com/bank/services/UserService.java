package com.bank.services;

import com.bank.entities.User;
import com.bank.repositories.UserRepository;
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

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public ResponseEntity create(User user){
        Optional<User> optional = userRepository.findByEmail(user.getEmail());

        if(optional.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário já cadastrado");
        }

        if(!(user.validateCPF())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("CPF inválido!");
        }

        String encryptPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        user.setPassword(encryptPassword);
        user.setId(UUID.randomUUID().toString());

        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body("Usuário cadastrado!");
    }
}