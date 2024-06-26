package com.bank.repositories;

import com.bank.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(@Param("email") String email);

    @Query("Select u FROM User u Where u.email = :email")
    UserDetails findUser(@Param("email") String email);
}
