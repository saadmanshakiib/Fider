package com.example.demo.Entities;


import jakarta.persistence.*;

@Entity
@Table(name = "bkashUsersTable")
public class bkashUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String number;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private double balance;

    public void setId(long id){
        this.id = id;
    }
    public void setNumber(String number){
        this.number = number;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setBalance(double balance){
        this.balance = balance;
    }

    public long getId(){return this.id;}
    public String getNumber(){return this.number;}
    public String getPassword(){return this.password;}
    public double getBalance(){return this.balance;}
}
