package com.example.evenementactualite.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/evenementactualite")
public class EvenementController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
