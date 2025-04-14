package com.example.donation.controller;

import com.example.donation.entity.Campagne;
import com.example.donation.entity.CampagneRequestDTO;
import com.example.donation.entity.UtilisateurDTO;
import com.example.donation.service.CampagneService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/don/campagne")
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

    @PostMapping("/add")
    public ResponseEntity<Campagne> ajouterCampagne(@RequestBody CampagneRequestDTO dto ,@RequestHeader("userId") String userId) {
        Campagne campagneCreee = campagneService.ajouterCampagne(dto,userId);
        return ResponseEntity.ok(campagneCreee);
    }




    @PutMapping("/{id}")
    public ResponseEntity<Campagne> updateCampagne(
            @PathVariable("id") Long id,
            @RequestBody Campagne updatedCampagne) {

        Campagne existingCampagne = campagneService.getCampagneById(id)
                .orElseThrow(() -> new EntityNotFoundException("Campagne non trouvée"));

        // Mettre à jour les champs de la campagne avec les nouvelles données
        existingCampagne.setTitre(updatedCampagne.getTitre());
        existingCampagne.setObjectif(updatedCampagne.getObjectif());
        existingCampagne.setDate_debut(updatedCampagne.getDate_debut());
        existingCampagne.setDate_fin(updatedCampagne.getDate_fin());

        // Si une image est présente, on peut la traiter (facultatif)
        if (updatedCampagne.getImage() != null && !updatedCampagne.getImage().isEmpty()) {
            // Logique pour gérer l'image ici si nécessaire
        }

        // Sauvegarder la campagne mise à jour
        Campagne updated = campagneService.updateCampagne(id,existingCampagne);
        return ResponseEntity.ok(updated);
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
