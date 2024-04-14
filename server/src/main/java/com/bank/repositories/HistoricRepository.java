package com.bank.repositories;

import com.bank.entities.Historic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricRepository extends JpaRepository<Historic, String> {
}
