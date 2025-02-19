package com.example.utilisateur.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Utilisateur")
public class UtilisateurController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
