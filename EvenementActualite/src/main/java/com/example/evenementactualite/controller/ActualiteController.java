package com.example.evenementactualite.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Actualite")
public class ActualiteController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
