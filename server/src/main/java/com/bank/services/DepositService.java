package com.bank.services;

import com.bank.entities.Deposit;
import com.bank.entities.MessageReturn;
import com.bank.entities.User;
import com.bank.repositories.DepositRepository;
import com.bank.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepositService {
    @Autowired
    private DepositRepository depositRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Deposit> getAll(){
        return depositRepository.findAll();
    }

    public ResponseEntity<MessageReturn> create(String id){
        Long nextId = depositRepository.getNextId();
        User user = userRepository.findById(id).orElseThrow();
        String formattedId = String.format("%04d", nextId);
        Deposit deposit = new Deposit(Long.parseLong("0"), user, "DEP" + formattedId, 100);

        depositRepository.save(deposit);
        return ResponseEntity.status(HttpStatus.CREATED).body(new MessageReturn(true, deposit.getAuthorization_code()));
    }
}
