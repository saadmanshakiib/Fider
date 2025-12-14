package com.example.demo.Controller;
import com.example.demo.Entities.Deliveryman_Users;
import com.example.demo.Entities.NagadUsers;
import com.example.demo.Entities.User;
import com.example.demo.Entities.bkashUsers;
import com.example.demo.Repository.Deliveryman;
import com.example.demo.Repository.NagadRepo;
import com.example.demo.Repository.Repo;
import com.example.demo.Repository.bkashRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.*;

import java.util.Optional;
@CrossOrigin(
        origins = "http://localhost:5000",
        allowCredentials = "true"
)
@RestController
public class Controller {

    @Autowired
    private Repo repo;
    @Autowired
    private bkashRepo bkashrepo;
    @Autowired
    private NagadRepo nagadRepo;
    @Autowired
    private Deliveryman dmRepo;

    @GetMapping("/ok")
    public String check() {
        return "i am ok!";
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user, HttpSession session) {
        Optional<User> userExist = repo.findByEmail(user.getEmail());

        if (userExist.isEmpty()) {
            return ResponseEntity.badRequest().body("No Matched Account Found");
        }
        else if (!userExist.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Wrong Password");
        }
        session.setAttribute("userId",userExist.get().getId());//// keeps track who logged in by id


        return ResponseEntity.ok("Login Successful");

    }


    @GetMapping("/me")
    public ResponseEntity<?> getProfileInfo(HttpSession session) {

        Long id = (Long) session.getAttribute("userId");
      // System.out.println(id);

        if (id == null) {
            return ResponseEntity.status(401).body("Not Logged In");
        }

        Optional<User> userOpt = repo.findById(id);

        if (userOpt.isPresent()) {
            return ResponseEntity.ok(userOpt.get());
        }
        else {
            return ResponseEntity.status(404).body("User not found");
        }
    }
    /// ////////////////////////////////////////
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session){
        session.invalidate();
        return ResponseEntity.ok().body("Logged Out");
    }

    /// ////////////////////////////////////////


    @PostMapping("/deliverymanlogin")
    public ResponseEntity<?> deliveryManLogin(@RequestBody Deliveryman_Users dm_users , HttpSession session){


        Optional<Deliveryman_Users> deliverymanExists = dmRepo.findByPhone(dm_users.getPhone());
//        System.out.println(deliverymanExists);

        if(deliverymanExists.isEmpty()){
            return ResponseEntity.badRequest().body("No Matched Account Found");
        }
        else if(!deliverymanExists.get().getPassword().equals(dm_users.getPassword())){
            return ResponseEntity.badRequest().body("Wrong Password");
        }
        session.setAttribute("dm_id",deliverymanExists.get().getId());


        return ResponseEntity.ok("Login Successfull");
    }


/// //////////deliverymansignup.\/////////////

@PostMapping("/deliverymansignup")
public ResponseEntity<?> deliverymanSignUp(@RequestBody Deliveryman_Users dm_user){

    Optional<Deliveryman_Users> deliverymanAlreadyExists = dmRepo.findByPhone(dm_user.getPhone());
    if(deliverymanAlreadyExists.isPresent()){
        return ResponseEntity.badRequest().body("Account Already Exists");
    }
    else{
        dmRepo.save(dm_user);
        return ResponseEntity.ok("Account Created");
    }

}
/// ////////////////////////
@GetMapping("/deliveryman_me")
public ResponseEntity<?> deliverymanProfile(HttpSession session){
    Long id = (Long) session.getAttribute("dm_id");
    System.out.println(id);
    if(id == null){
        return ResponseEntity.badRequest().body("Error Logging In");
    }
    Optional<Deliveryman_Users> deliverymanAccount = dmRepo.findById(id);
    System.out.println(deliverymanAccount);

    if(deliverymanAccount.isPresent()){
        return ResponseEntity.ok(deliverymanAccount.get());
    }

    return ResponseEntity.badRequest().body("Something Went Wrong");
}

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody User user) {
        try {
            Optional<User> userExist = repo.findByEmail(user.getEmail());
            if (userExist.isEmpty()) {
                repo.save(user);
                return ResponseEntity.ok().body("Account Created");
            }
        }
        catch (Error e) {
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


