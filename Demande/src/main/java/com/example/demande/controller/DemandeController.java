package com.example.demande.controller;

import com.example.demande.entity.Demande;
import com.example.demande.entity.DemandeDTO;
import com.example.demande.service.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/demande")
public class DemandeController {

    @Autowired
    private DemandeService demandeService;

    @GetMapping("/notify-refused")
    public ResponseEntity<Void> notifyRefusedUsers() {
        demandeService.notifyRefusedDemandesUsers();
        return ResponseEntity.ok().build();
    }


    @GetMapping("/don/{donId}")
    public List<DemandeDTO> getDemandesByDonId(@PathVariable Long donId) {
        return demandeService.getDemandesByDonId(donId);
    }
    // Obtenir toutes les demandes
    @GetMapping
    public List<Demande> getAllDemandes() {
        return demandeService.getAllDemandes();
    }

    // Obtenir une demande par ID
    @GetMapping("/{id}")
    public ResponseEntity<Demande> getDemandeById(@PathVariable Long id) {
        Optional<Demande> demande = demandeService.getDemandeById(id);
        return demande.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Créer une nouvelle demande
    @PostMapping("/add/{donId}")
    public Demande createDemande(@RequestBody Demande demande,
                                 @PathVariable("donId") Long donId,
                                 @RequestHeader("userId") String userId) {
        return demandeService.createDemande(demande, donId ,userId);
    }

    // Mettre à jour une demande
    @PutMapping("/update/{id}")
    public ResponseEntity<Demande> updateDemande(@PathVariable Long id, @RequestBody Demande demandeDetails) {
        Demande updatedDemande = demandeService.updateDemande(id, demandeDetails);
        return ResponseEntity.ok(updatedDemande);
    }

    // Supprimer une demande
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDemande(@PathVariable Long id) {
        demandeService.deleteDemande(id);
        return ResponseEntity.noContent().build();
    }

    // Obtenir les demandes par utilisateurId
    @GetMapping("/user/{utilisateurId}")
    public List<Demande> getDemandesByUtilisateurId(@PathVariable String utilisateurId) {
        return demandeService.getDemandesByUtilisateurId(utilisateurId);
    }
}
