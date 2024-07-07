package com.bank.entities;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class UserGetInfosDates {
    private LocalDate startDate;
    private LocalDate endDate;

    public UserGetInfosDates() {
    }

    public UserGetInfosDates(LocalDate startDate, LocalDate endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
