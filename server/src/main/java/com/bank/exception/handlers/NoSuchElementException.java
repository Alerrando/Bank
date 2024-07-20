package com.bank.exception.handlers;

public class NoSuchElementException extends RuntimeException{
    public NoSuchElementException(String msg){
        super(msg);
    }
}
