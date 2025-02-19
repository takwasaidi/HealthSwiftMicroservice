package com.example.rendezvous.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/RendezVous")
public class RendezVousController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
