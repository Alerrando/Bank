package com.bank.exception.handlers;

public class AccessDeniedException extends RuntimeException {
    public AccessDeniedException(String msg){
        super(msg);
    }
}
