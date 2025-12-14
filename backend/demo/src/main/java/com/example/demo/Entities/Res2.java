package com.example.demo.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Savore")

public class Res2 {
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
