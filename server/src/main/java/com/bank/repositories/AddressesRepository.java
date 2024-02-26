package com.bank.repositories;

import com.bank.entities.Addresses;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressesRepository extends JpaRepository<Addresses, String> {
}
