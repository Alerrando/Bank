package com.bank.repositories;

import com.bank.entities.User;
import com.bank.projections.TransactionsDetailsProjections;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(@Param("email") String email);

    @Query("Select u FROM User u Where u.email = :email")
    UserDetails findUser(@Param("email") String email);

    @Query("SELECT MONTH(d.date) as month, SUM(d.value) as deposits, SUM(t.value) as withdrawals FROM Deposit d LEFT JOIN Transfer t ON t.user_cpf.id = d.user.id AND t.date BETWEEN :dateStart AND :dateEnd WHERE d.user.id = :id GROUP BY MONTH(d.date), d.value, t.value")
    List<TransactionsDetailsProjections> getDepWithdDetailsProjections(@Param("id") Long id, @Param("dateStart") LocalDate dateStart, @Param("dateEnd") LocalDate dateEnd);
}
