package com.bank.controllers;

import com.bank.dto.LoginRequest;
import com.bank.entities.MessageReturn;
import com.bank.entities.User;
import com.bank.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(value = "/login")
@RestController
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping
    public ResponseEntity<MessageReturn> create(@RequestBody LoginRequest loginRequest){
        return loginService.login(loginRequest.getEmail(), loginRequest.getPassword());
    }
}
