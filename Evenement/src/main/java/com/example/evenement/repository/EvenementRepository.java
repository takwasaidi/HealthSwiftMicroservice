package com.example.evenement.repository;

import com.example.evenement.entity.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EvenementRepository extends JpaRepository<Evenement,Long> {
    // filtrage par titre

    public Evenement findByTitre(String titre);
}
