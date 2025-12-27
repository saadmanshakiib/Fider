package com.example.demo.Entities;
import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(nullable = false)
    private Long userId;
//    @Column(nullable = false)
//    private String orderDate;
//    @Column(nullable = false)
//    private String item;
    @Column(nullable = false)
    private double price;

    public void setOrderId(Long orderId){
        this.orderId = orderId;
    }
    public void setPrice(double price){
        this.price = price;
    }
    public void setUserId(Long userId){
        this.userId = userId;
    }
//    public void setOrderDate(String orderDate){
//        this.orderDate = orderDate;
//    }
//    public void setItem(String item){
//        this.item = item;
//    }

    public Long getOrderId(){return this.orderId;}
    public Long getUserId(){return this.userId;}
    public double getPrice(){return this.price;}
//    public String getOrderDate(){return this.orderDate;}
//    public String getItem(){return this.item;}






}
