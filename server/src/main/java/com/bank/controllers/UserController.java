package com.bank.controllers;

import com.bank.entities.User;
import com.bank.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll(){
        return userService.getAll();
    }

    @PostMapping
    public ResponseEntity create(@RequestBody User user){
        return userService.create(user);
    }
}