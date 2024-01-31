package com.bank.entities;

import jakarta.persistence.*;

@Table(name = "transfer")
@Entity
public class Transfer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private String id;

    @ManyToOne
    @JoinColumn(name = "user_cpf")
    private User user_cpf;

    @ManyToOne
    @JoinColumn(name = "user_cpf_transfer")
    private User user_cpf_transfer;

    private String authorization_code;

    private double value;

    public Transfer(){
    }

    public Transfer(String id, User user_cpf, User user_cpf_transfer, String authorization_code, double value) {
        this.id = id;
        this.user_cpf = user_cpf;
        this.user_cpf_transfer = user_cpf_transfer;
        this.authorization_code = authorization_code;
        this.value = value;
    }
}
