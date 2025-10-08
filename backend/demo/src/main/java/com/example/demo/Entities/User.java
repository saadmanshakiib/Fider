package com.example.demo.Entities;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
        @Column(nullable = false)
        private String email;
        @Column(nullable = false)
        private String password;

        public void setEmail(String email){
            this.email = email;
        }
        public void setId(long id){
            this.id = id;
        }
        public void setPassword(String password){
            this.password = password;
        }

        public String getEmail(){return this.email;}
    public String getPassword(){return this.password;}
    public long getId(){return this.id;}

}
