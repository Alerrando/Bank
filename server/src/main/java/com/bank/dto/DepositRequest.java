package com.bank.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DepositRequest {
    private Double value;
    
    public DepositRequest(){
    }

    public DepositRequest(Double value) {
        this.value = value;
    }
}
