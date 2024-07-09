package com.bank.projections;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransactionsDetailsProjectionsImpl {
    private Double deposits;
    private Double withdrawals;
    private String month;

    public TransactionsDetailsProjectionsImpl() {
    }

    public TransactionsDetailsProjectionsImpl(Double deposits, Double withdrawals, String month) {
        this.deposits = deposits;
        this.withdrawals = withdrawals;
        this.month = month;
    }
}
