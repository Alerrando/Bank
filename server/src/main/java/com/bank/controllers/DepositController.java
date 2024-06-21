package com.bank.controllers;

import com.bank.entities.Deposit;
import com.bank.entities.MessageReturn;
import com.bank.services.DepositService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/")
@RestController
public class DepositController {
    @Autowired
    private DepositService depositService;

    @GetMapping("/deposit")
    public List<Deposit> getAll(){
        return depositService.getAll();
    }

    @PostMapping("/deposit")
    public ResponseEntity<MessageReturn> create(@RequestBody Double value){
        return depositService.create(value);
    }
}
