package com.bank.entities;

public class MessageReturn {
    public boolean status;
    public String data;

    public MessageReturn(boolean status, String data) {
        this.status = status;
        this.data = data;
    }
}
