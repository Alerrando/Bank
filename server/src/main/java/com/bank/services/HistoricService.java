package com.bank.services;

import com.bank.entities.Historic;
import com.bank.entities.User;
import com.bank.repositories.HistoricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class HistoricService {
    @Autowired
    private HistoricRepository historicRepository;

    public void create(User user){
        LocalDate localDate = LocalDate.now();
        Historic historic = new Historic("0", user, localDate, user.getTotal_value());

        historicRepository.save(historic);
    }
}
