package com.bank.controllers;

import com.bank.dto.UserDTO;
import com.bank.entities.MessageReturn;
import com.bank.entities.User;
import com.bank.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/user")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDTO> getAll(){
        return userService.getAll();
    }

    @PostMapping
    public ResponseEntity<MessageReturn> create(@RequestBody User user){
        return userService.create(user);
    }

    @PostMapping("/get-info-user")
    public ResponseEntity<UserDTO> getInfosUser(){
        return userService.getInfosUser();
    }
}