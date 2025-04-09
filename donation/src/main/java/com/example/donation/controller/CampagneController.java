package com.example.donation.controller;

import com.example.donation.entity.Campagne;
import com.example.donation.service.CampagneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/campagne")
@CrossOrigin(origins = "*")
public class CampagneController {

    @Autowired
    private CampagneService campagneService;

    @GetMapping
    public List<Campagne> getAllCampagnes() {
        return campagneService.getAllCampagnes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Campagne> getCampagneById(@PathVariable Long id) {
        return campagneService.getCampagneById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Campagne createCampagne(@RequestBody Campagne campagne) {
        return campagneService.createCampagne(campagne);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Campagne> updateCampagne(@PathVariable Long id, @RequestBody Campagne campagne) {
        Campagne updated = campagneService.updateCampagne(id, campagne);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCampagne(@PathVariable Long id) {
        if (campagneService.deleteCampagne(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
