package com.bank.dto;

import com.bank.entities.User;

public class UserDTO {
    private String email;

    private String password;

    private String cpf;

    public UserDTO() {
    }

    public UserDTO(User user) {
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.cpf = user.getCpf();
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getCpf() { return cpf; }
}
