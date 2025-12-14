package com.example.demo.Controller;


import com.example.demo.Entities.Orders;
import com.example.demo.Repository.OrderRepo;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    private final OrderRepo orderrepo;

    public OrderController(OrderRepo orderrepo){
        this.orderrepo = orderrepo;
    }

    @PostMapping("/saveorder")
    public ResponseEntity<?> saveOrder(@RequestBody Orders orders , HttpSession session){
    Long id = (Long)session.getAttribute("userId");
    if(id == null){
        return ResponseEntity.status(404).body("Not Logged In");
    }
    orders.setUserId(id);
    Orders saved = orderrepo.save(orders);
    return ResponseEntity.ok(saved);
    }
}
