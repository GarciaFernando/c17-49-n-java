package com.medilatam.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table (name = "persona")
public class PersonaEntity {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;
}
