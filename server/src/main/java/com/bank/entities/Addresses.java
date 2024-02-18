package com.bank.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "/addresses")
@Getter
@Setter
public class Addresses {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String cep;
    private String logradouro;
    private String complemento;
    private String bairro;
    private String localidade;
    private String uf;
    private String ibge;
    private String gia;
    private String ddd;
    @OneToOne
    @MapsId
    private User user;

    public Addresses(){
    }

    public Addresses(String id, String cep, String logradouro, String complemento, String bairro, String localidade, String uf, String ibge, String gia, String ddd, User user) {
        this.id = id;
        this.cep = cep;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.bairro = bairro;
        this.localidade = localidade;
        this.uf = uf;
        this.ibge = ibge;
        this.gia = gia;
        this.ddd = ddd;
        this.user = user;
    }
}
