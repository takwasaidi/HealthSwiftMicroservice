package com.example.demande.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/demande")
public class DemandeController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
