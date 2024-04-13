package com.bank.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "deposit")
@Entity
@Getter
@Setter
public class Deposit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_cpf")
    private User user;

    private String authorization_code;

    private double value;

    public Deposit (){
    }

    public Deposit(Long id, User user,String authorization_code, double value) {
        this.id = id;
        this.user = user;
        this.authorization_code = authorization_code;
        this.value = value;
    }


}
