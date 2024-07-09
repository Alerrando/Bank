package com.bank.repositories;

import com.bank.entities.User;
import com.bank.projections.DepositsDetails;
import com.bank.projections.TransferDetails;
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

    @Query("SELECT MONTH(d.date) as month, SUM(d.value) as deposits FROM Deposit d WHERE d.user.id = :id AND d.date BETWEEN :dateStart AND :dateEnd GROUP BY MONTH(d.date)")
    List<DepositsDetails> getDepDetailsProjections(@Param("id") Long id, @Param("dateStart") LocalDate dateStart, @Param("dateEnd") LocalDate dateEnd);

    @Query("SELECT MONTH(t.date) as month, SUM(t.value) as withdrawals FROM Transfer t WHERE t.user_cpf.id = :id AND t.date BETWEEN :dateStart AND :dateEnd GROUP BY MONTH(t.date)")
    List<TransferDetails> getWithDetailsProjections(@Param("id") Long id, @Param("dateStart") LocalDate dateStart, @Param("dateEnd") LocalDate dateEnd);
}
