package com.example.utilisateur.controller;

import com.example.utilisateur.entity.Utilisateur;
import com.example.utilisateur.repository.UserRepository;
import com.example.utilisateur.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UtilisateurController {
    @Autowired
    UserService userService;
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/signup")
    public Utilisateur createUser(@RequestBody Utilisateur user)
    {
        return userService.createUtilisateur(user);
    }
    @GetMapping("/userById")
    public Utilisateur userByID(@RequestHeader("userId") String userId)
    {
        return userRepository.findById(userId).orElse(null);
    }
    @GetMapping("/{id}")
    public Utilisateur getUtilisateurById(@PathVariable("id") String id){
        return userRepository.findById(id).orElse(null);
    }
    @GetMapping("/allusersId")
    public List<String> getAllUsersID(){
        return userService.getAllUsersID();
    }

    @GetMapping("/userEmail/{userId}")
    public String getUserEmail(@PathVariable("userId") String userId){
        return userService.getUserEmail(userId);
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello";
    }
}
