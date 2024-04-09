package com.bank.services;

import com.bank.entities.Deposit;
import com.bank.repositories.DepositRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepositService {
    @Autowired
    private DepositRepository depositRepository;

    public List<Deposit> getAll(){
        return depositRepository.findAll();
    }

    public Long getNextId(){
        return depositRepository.getNextId();
    }
}
