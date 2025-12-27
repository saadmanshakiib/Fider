package com.example.demo.Controller;


import com.example.demo.Entities.Deliveryman_Users;
import com.example.demo.Repository.Deliveryman;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class DeliverymanController {
    @Autowired
    private Deliveryman dmRepo;

    @PostMapping("/adddeliveryman")
    public ResponseEntity<?> addDeliveryman(@RequestBody Deliveryman_Users dm_user){
        Optional<Deliveryman_Users> deliverymanExists = dmRepo.findByPhone(dm_user.getPhone());

        if(deliverymanExists.isEmpty()){
            dmRepo.save(dm_user);
            return ResponseEntity.ok().body("Deliveryman Added");
        }
        if(deliverymanExists.get().getPhone().equals(dm_user.getPhone())){
            return ResponseEntity.badRequest().body("Deliveryman Already Exists");
        }
        return ResponseEntity.badRequest().body("Error");
    }

    @GetMapping("removedeliveryman")
    public ResponseEntity<?> getAllDeliveryman(){
        return ResponseEntity.ok().body(dmRepo.findAll());
    }
}
