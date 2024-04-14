package com.bank.dto;

import com.bank.entities.User;

public class UserDTO {
    private String name;
    private String email;
    private String cpf;
    private String password;
    private Double total_value;

    public UserDTO() {
    }

    public UserDTO(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.cpf = user.getCpf();
        this.total_value = user.getTotal_value();
    }

    public String getEmail() {
        return email;
    }

    public String getCpf() { return cpf; }

    public String getName() { return name; }

    public String getPassword(){ return password; }

    public Double getTotalValue() { return total_value; }

}
