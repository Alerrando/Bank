package com.bank.controllers;

import com.bank.entities.Deposit;
import com.bank.services.DepositService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping(value = "/deposit")
@RestController
public class DepositController {
    @Autowired
    private DepositService depositService;

    @GetMapping
    public List<Deposit> getAll(){
        return depositService.getAll();
    }

    @GetMapping("/id")
    public Long getNextId(){
        return depositService.getNextId();
    }
}
