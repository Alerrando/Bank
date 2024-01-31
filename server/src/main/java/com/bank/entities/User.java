package com.bank.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Table(name = "user")
@Entity
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String name;

    @Column(unique = true)
    private String email;
    private Date date_of_birth;
    private String password;

    @Column(unique = true)
    private String cpf;

    private String cep;
    private String address_number;
    private Double total_value;

    public User() {
    }

    public User(String id, String name, String email, Date date_of_birth, String password, String cpf, String cep, String address_number, Double total_value) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.date_of_birth = date_of_birth;
        this.password = password;
        this.cpf = cpf;
        this.cep = cep;
        this.address_number = address_number;
        this.total_value = total_value;
    }
}
