package com.example.utilisateur.controller;

import com.example.utilisateur.entity.Utilisateur;
import com.example.utilisateur.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UtilisateurController {
    @Autowired
    UserService userService;
    @PostMapping("/signup")
    public Utilisateur createUser(@RequestBody Utilisateur user)
    {
        return userService.createUtilisateur(user);
    }
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
