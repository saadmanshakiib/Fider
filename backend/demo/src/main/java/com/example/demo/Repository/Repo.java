package com.example.demo.Repository;

import com.example.demo.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Repo extends JpaRepository<User,Long> {

Optional<User> findByEmail(String email);
}
