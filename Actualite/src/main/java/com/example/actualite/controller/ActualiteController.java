package com.example.actualite.controller;

import com.example.actualite.entity.Actualite;
import com.example.actualite.service.ActualiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Actualite")
@CrossOrigin(origins = "*")
public class ActualiteController {

    @Autowired
    private ActualiteService actualiteService;

    @GetMapping
    public List<Actualite> getAllActualites() {
        return actualiteService.getAllActualites();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Actualite> getActualiteById(@PathVariable Long id) {
        return actualiteService.getActualiteById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Actualite createActualite(@RequestBody Actualite actualite) {
        return actualiteService.createActualite(actualite);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Actualite> updateActualite(@PathVariable Long id, @RequestBody Actualite actualite) {
        Actualite updated = actualiteService.updateActualite(id, actualite);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActualite(@PathVariable Long id) {
        if (actualiteService.deleteActualite(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
