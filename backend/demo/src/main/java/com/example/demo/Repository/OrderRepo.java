package com.example.demo.Repository;

import com.example.demo.Entities.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Orders,Long> {

}
