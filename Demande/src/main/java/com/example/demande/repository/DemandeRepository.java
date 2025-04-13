package com.example.demande.repository;

import com.example.demande.entity.Demande;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandeRepository extends JpaRepository<Demande,Long> {
    // Trouver toutes les demandes par utilisateurId
    List<Demande> findByUtilisateurId(String utilisateurId);
    List<Demande> findByDonId(Long donId);
    List<Demande> findByStatut(String statut);

}
