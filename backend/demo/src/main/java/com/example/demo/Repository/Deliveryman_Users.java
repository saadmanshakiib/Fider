package com.example.demo.Entities;

import jakarta.persistence.*;
import lombok.Setter;


@Entity
@Table(name = "Deliveryman_users")

public class Deliveryman_Users {
    private String phone;
    private String password;
    private String name;

    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    public void setPassword(String password ){
        this.password = password;
    }
    @Column(nullable = false)
    public void setName(String name ){
        this.name = name;
    }
    @Column(nullable = false)
    public void setPhone(String phone ){
        this.phone = phone;
    }

    public String getPassword(){return this.password;}
    public String getName(){return this.name;}
    public String getPhone(){return this.phone;}
    public Long getId(){return this.id;}

}
