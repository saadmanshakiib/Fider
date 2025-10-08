package com.example.demo.Controller;


//import com.example.demo.Entities.User;
import com.example.demo.Entities.User;
import com.example.demo.Repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class Controller {

    @Autowired
    private Repo repo;

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
        try{
            Optional<User> userExist = repo.findByEmail(user.getEmail());
            if(userExist.isEmpty()) {
                repo.save(user);
                return ResponseEntity.ok().body("Account Created");
            }
        }
        catch (Error e){
            System.out.println(e);
        }
        return ResponseEntity.badRequest().body("Account Already Exists!");

    }
    @GetMapping("/allusers")
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.ok(repo.findAll());
    }
}

