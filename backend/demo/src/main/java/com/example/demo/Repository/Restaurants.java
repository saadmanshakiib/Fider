package com.example.demo.Entities;


import jakarta.persistence.*;

import javax.annotation.processing.Generated;

@Entity
@Table(name = "restaurants")
public class Restaurants {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private long id;

    @Column(nullable = false)
    private String name;

    public void setName(String name){
        this.name = name;
    }
    public void setId(long id){
        this.id = id;
    }

    public String getName(){return this.name;}
    public long getId(){return this.id;}

}
