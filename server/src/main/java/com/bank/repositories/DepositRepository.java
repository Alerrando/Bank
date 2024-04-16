package com.bank.repositories;

import com.bank.entities.Deposit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DepositRepository extends JpaRepository<Deposit, String> {
    @Query(value = "SELECT LAST_INSERT_ID()", nativeQuery = true)
    Long getNextId();
}
