package com.example.donation.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Don")
public class DonController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
