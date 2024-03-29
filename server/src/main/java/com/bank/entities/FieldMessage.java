package com.bank.entities;

public class FieldMessage {
    private String fieldName;
    private String defaultMessage;

    public FieldMessage(){
    }

    public FieldMessage(String fieldName, String defaultMessage){
        this.fieldName = fieldName;
        this.defaultMessage = defaultMessage;
    }

    public String getFieldName(){
        return this.fieldName;
    }

    public void setFieldName(String fieldName){
        this.fieldName = fieldName;
    }

    public String getDefaultMessage(){
        return this.defaultMessage;
    }

    public void setDefaultMessage(String defaultMessage){
        this.defaultMessage = defaultMessage;
    }
}
