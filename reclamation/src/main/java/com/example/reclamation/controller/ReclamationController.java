package com.example.reclamation.controller;

import com.example.reclamation.entity.Reclamation;
import com.example.reclamation.service.ReclamationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reclamations")
public class ReclamationController {

    @Autowired
    private ReclamationService reclamationService;

    @GetMapping
    public List<Reclamation> getAllReclamations(@RequestHeader("userId")String userId) {
        return reclamationService.getAllReclamations(userId);
    }

    @GetMapping("/{id}")
    public Reclamation getReclamationById(@PathVariable Long id) {
        return reclamationService.getReclamationById(id);
    }

    @PostMapping
    public Reclamation createReclamation(@RequestBody Reclamation reclamation , @RequestHeader("userId") String userId) {
        return reclamationService.createReclamation(reclamation,userId);
    }

    @PutMapping("/{id}")
    public Reclamation updateReclamation(@PathVariable Long id, @RequestBody Reclamation reclamation) {
        return reclamationService.updateReclamation(id, reclamation);
    }

    @DeleteMapping("/{id}")
    public boolean deleteReclamation(@PathVariable Long id) {
        return reclamationService.deleteReclamation(id);
    }
}
