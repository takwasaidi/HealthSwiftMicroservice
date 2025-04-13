package com.example.donation.controller;

import com.example.donation.entity.Campagne;
import com.example.donation.service.CampagneService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    @PostMapping
    public Campagne createCampagne(@RequestParam("titre") String titre,
                                   @RequestParam("objectif") String objectif,
                                   @RequestParam("date_debut") String date_debut,
                                   @RequestParam("date_fin") String date_fin,
                                   @RequestParam("image") MultipartFile image) {
        System.out.println("Titre: " + titre);
        System.out.println("Objectif: " + objectif);
        System.out.println("Date début: " + date_debut);
        System.out.println("Date fin: " + date_fin);
        System.out.println("Image: " + image.getOriginalFilename());
        // Créer un objet Campagne
        Campagne campagne = new Campagne();

        // Assignation des valeurs simples
        campagne.setTitre(titre);
        campagne.setObjectif(objectif);

        // Conversion des chaînes de caractères en LocalDate
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");  // Ajuster le format si nécessaire
        LocalDate dateDebut = LocalDate.parse(date_debut, formatter);
        LocalDate dateFin = LocalDate.parse(date_fin, formatter);

        // Affecter les dates à l'objet Campagne
        campagne.setDate_debut(dateDebut);
        campagne.setDate_fin(dateFin);

        // Appel au service pour créer la campagne avec l'image
        return campagneService.createCampagne(campagne, image);
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
