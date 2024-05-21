package com.bank.services;

import com.bank.entities.Deposit;
import com.bank.entities.MessageReturn;
import com.bank.entities.User;
import com.bank.repositories.DepositRepository;
import com.bank.repositories.UserRepository;
import com.bank.util.CookiesEvent;
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

    @Autowired
    private CookiesEvent cookiesEvent;

    public List<Deposit> getAll(){
        return depositRepository.findAll();
    }

    public ResponseEntity<MessageReturn> create(Double value){
        Long nextId = depositRepository.getNextId();
        String id = cookiesEvent.getValueCookie("idUser");
        User user = userRepository.findById("13167492-8896-4da7-a34d-abbbb9da50e1").orElseThrow();

        String formattedId = String.format("%04d", nextId);
        Deposit deposit = new Deposit(Long.parseLong("0"), user, "DEP" + formattedId, value);
        user.setTotal_value(user.getTotal_value() + value);


        depositRepository.save(deposit);
        userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body(new MessageReturn(true, deposit.getAuthorization_code()));
    }
}
