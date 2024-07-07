package com.bank.services;

import com.bank.entities.MessageReturn;
import com.bank.entities.User;
import com.bank.repositories.UserRepository;
import com.bank.util.CookiesEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CookiesEvent cookiesEvent;

    @Autowired
    private TokenService tokenService;

    public ResponseEntity<MessageReturn> login(String email, String password){
        Optional<User> userSearch = userRepository.findByEmail(email);
        String encryptPassword = new BCryptPasswordEncoder().encode(password);

        if(userSearch.isEmpty() || encryptPassword.equals(userSearch.get().getPassword())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageReturn(false, "Invalid Credentials"));
        }

        cookiesEvent.addCookie("idUser", userSearch.get().getId());
        tokenService.generateToken(userSearch.get());
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(new MessageReturn(true, "Logged in User!"));
    }
}
