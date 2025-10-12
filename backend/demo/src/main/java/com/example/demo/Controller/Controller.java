package com.example.demo.Controller;


//import com.example.demo.Entities.User;
import com.example.demo.Entities.NagadUsers;
import com.example.demo.Entities.User;
import com.example.demo.Entities.bkashUsers;
import com.example.demo.Repository.NagadRepo;
import com.example.demo.Repository.Repo;
import com.example.demo.Repository.bkashRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class Controller {

    @Autowired
    private Repo repo;
    @Autowired
    private bkashRepo bkashrepo;

    @Autowired
    private NagadRepo nagadRepo;

    @GetMapping("/ok")
    public String check() {
        return "i am ok!";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        Optional<User> userExist = repo.findByEmail(user.getEmail());

        if (userExist.isEmpty()) {
            return ResponseEntity.badRequest().body("No Matched Account Found");
        } else if (!userExist.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Wrong Password");
        }
        return ResponseEntity.ok("Login Successful");
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        try {
            Optional<User> userExist = repo.findByEmail(user.getEmail());
            if (userExist.isEmpty()) {
                repo.save(user);
                return ResponseEntity.ok().body("Account Created");
            }
        } catch (Error e) {
            System.out.println(e);
        }
        return ResponseEntity.badRequest().body("Account Already Exists!");

    }

    @GetMapping("/allusers")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(repo.findAll());
    }

    @PostMapping("/bkash")
    public ResponseEntity<?> checkBkashUser(@RequestBody bkashUsers bkashUser) {
        Optional<bkashUsers> bkashUserExists = bkashrepo.findByNumber(bkashUser.getNumber());
        if (!bkashUserExists.isEmpty()) {
            if(bkashUserExists.get().getPassword().equals(bkashUser.getPassword())){
                return ResponseEntity.ok("Bkash User Found");
            }
        }
        return ResponseEntity.badRequest().body("No Bkash User Found");
    }

    @GetMapping("/getbkashusers")
    public ResponseEntity<?> getAllBkashUSers() {
        return ResponseEntity.ok(bkashrepo.findAll());
    }

    @GetMapping("/checkbalance/{num}")
    public ResponseEntity<Double> checkBalance(@PathVariable String num) {
        Optional<Double> balanceOpt = bkashrepo.getBalanceByNumber(num);
        return ResponseEntity.ok(balanceOpt.orElse(0.0));
    }

    @PostMapping("/nagad")
    public ResponseEntity<?> checkNagadUser(@RequestBody NagadUsers nagadUser){
        Optional<NagadUsers> nagadUserExists = nagadRepo.findNagadUserByNumber(nagadUser.getNumber());
        if(nagadUserExists.isPresent()){
            if(nagadUserExists.get().getPassword().equals(nagadUser.getPassword())){
                    return ResponseEntity.ok("Nagad User Found");
            }
        }
        return ResponseEntity.badRequest().body("No Nagad User Found");
    }

}


