package com.bank.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Table(name = "historic")
@Entity
@Getter
@Setter
public class Historic{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    @JoinColumn(name = "user_cpf")
    private User user;

    private LocalDate created;

    private double value;

    public Historic(){
    }

    public Historic(String id, User user, LocalDate created, double value){
        this.id = id;
        this.user = user;
        this.created = created;
        this.value = value;
    }
}
