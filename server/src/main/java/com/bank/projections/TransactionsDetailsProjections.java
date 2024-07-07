package com.bank.projections;

import java.time.LocalDate;

public interface TransactionsDetailsProjections {
    Double getDeposits();
    Double getWithdrawals();
    String getMonth();
    LocalDate getYear();
}
