package com.bank.entities;

public class AuthenticationDTO {
    private String email;
    private String name;
    private Integer value_total;

    public AuthenticationDTO(String email, String name, Integer value_total) {
        this.email = email;
        this.name = name;
        this.value_total = value_total;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getValue_total() {
        return value_total;
    }

    public void setValue_total(Integer value_total) {
        this.value_total = value_total;
    }
}
