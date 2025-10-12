package com.example.demo.Repository;

import com.example.demo.Entities.bkashUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface bkashRepo extends JpaRepository<bkashUsers,Long> {
    Optional<bkashUsers> findByNumber(String number);
    @Query("SELECT b.balance FROM bkashUsers b WHERE b.number = :number")
    Optional<Double> getBalanceByNumber( @Param("number") String number);
}
