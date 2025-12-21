package com.example.demo.Controller;


import com.example.demo.Entities.Restaurants;
import com.example.demo.Repository.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantRepo restaurantRepo;

@GetMapping("/allrestaurants")
    public ResponseEntity<?> getAllRes(){
    return ResponseEntity.ok(restaurantRepo.findAll());
}

@DeleteMapping("/removerestaurants/{id}")
    public ResponseEntity<?> removeRestaurants(@PathVariable Integer id){
    restaurantRepo.deleteById(id);
    return ResponseEntity.ok("Deleted Successfully");
}

@PostMapping("/addrestaurants")
    public ResponseEntity<?> addRestaurant(@RequestBody Restaurants restaurant){
    Optional<Restaurants> resExists = restaurantRepo.findByName(restaurant.getName());
    System.out.println(restaurant.getName());
    if(resExists.isEmpty()){
        restaurantRepo.save(restaurant);
        return ResponseEntity.ok().body("Restaurant Saved");
    }
    return ResponseEntity.badRequest().body("Something Went Wrong");
}

}
