package com.example.demo.Repository;

import com.example.demo.Entities.Deliveryman_Users;
import com.example.demo.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface Deliveryman extends JpaRepository<Deliveryman_Users,Long> {
    Optional<Deliveryman_Users> findByPhone(String phone);

    Optional<Deliveryman_Users> findById(Long  id);



}
