package com.example.demo.Repository;

import com.example.demo.Entities.NagadUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NagadRepo extends JpaRepository<NagadUsers,Long> {
    Optional<NagadUsers> findNagadUserByNumber(String number);
}
