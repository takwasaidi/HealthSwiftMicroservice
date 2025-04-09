package com.example.reclamation.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String statut; // Exemple : "En attente", "Traitée", "Rejetée"

    private LocalDateTime dateCreation;

    private String type; // Exemple : "Technique", "Administratif", "Autre"

    private Long utilisateurId; // ou un objet User si tu veux une relation

}
