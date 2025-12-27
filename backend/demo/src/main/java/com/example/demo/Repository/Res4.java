package com.example.demo.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Fork_n_Flame")

public class Res4 {
    private String itemName;
    private double price;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    public void setName(String itemName){
        this.itemName = itemName;
    }
    @Column(nullable = false)
    public void setPrice(double price){
        this.price = price;
    }

    public String getItemName(){
        return this.itemName;
    }
    public double getPrice(){
        return this.price;
    }

}
