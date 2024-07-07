package com.bank.projections;

import java.util.List;

public interface UserDetailsProjection {
    String getName();
    String getCpf();
    Double getTotalValue();
    List<TransactionsDetailsProjections> getTransactions();
}
