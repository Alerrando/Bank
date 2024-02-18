package com.bank.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.InputMismatchException;
import java.util.Objects;

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
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Addresses addresses;
    private Double total_value;

    public User() {
    }

    public User(String id, String name, String email, Date date_of_birth, String password, String cpf, String cep, String address_number, Addresses addresses,Double total_value) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.date_of_birth = date_of_birth;
        this.password = password;
        this.cpf = cpf;
        this.cep = cep;
        this.address_number = address_number;
        this.addresses = addresses;
        this.total_value = total_value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(name, user.name) && Objects.equals(email, user.email) && Objects.equals(date_of_birth, user.date_of_birth) && Objects.equals(password, user.password) && Objects.equals(cpf, user.cpf) && Objects.equals(cep, user.cep) && Objects.equals(address_number, user.address_number) && Objects.equals(total_value, user.total_value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, email, date_of_birth, password, cpf, cep, address_number, total_value);
    }

    public boolean validateCPF() {
        if(this.cpf == null) return false;
        String CPF =this.cpf;
        CPF = CPF.replaceAll("\\.|-| |[a-zA-Z]", "");
        if (CPF.equals("00000000000") || CPF.equals("11111111111") || CPF.equals("22222222222")
                || CPF.equals("33333333333") || CPF.equals("44444444444") || CPF.equals("55555555555")
                || CPF.equals("66666666666") || CPF.equals("77777777777") || CPF.equals("88888888888")
                || CPF.equals("99999999999") || (CPF.length() != 11))
            return (false);

        char dig10, dig11;
        int sm, i, r, num, peso;

        try {
            sm = 0;
            peso = 10;
            for (i = 0; i < 9; i++) {
                num = (int) (CPF.charAt(i) - 48);
                sm = sm + (num * peso);
                peso = peso - 1;
            }

            r = 11 - (sm % 11);
            if ((r == 10) || (r == 11))
                dig10 = '0';
            else
                dig10 = (char) (r + 48);

            sm = 0;
            peso = 11;
            for (i = 0; i < 10; i++) {
                num = (int) (CPF.charAt(i) - 48);
                sm = sm + (num * peso);
                peso = peso - 1;
            }

            r = 11 - (sm % 11);
            if ((r == 10) || (r == 11))
                dig11 = '0';
            else
                dig11 = (char) (r + 48);

            if ((dig10 == CPF.charAt(9)) && (dig11 == CPF.charAt(10)))
                return (true);
            else
                return (false);
        } catch (InputMismatchException erro) {
            return (false);
        }


    }

}
