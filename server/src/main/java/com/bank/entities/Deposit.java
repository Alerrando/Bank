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
    private String user_cpf;

    private String authorization_code;

    private double value;

    public Deposit (){
    }

    public Deposit(Long id, String user_cpf,String authorization_code, double value) {
        this.id = id;
        this.user_cpf = user_cpf;
        this.authorization_code = authorization_code;
        this.value = value;
    }


}
