package com.example.demande.repository;

import com.example.demande.entity.Demande;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DemandeRepository extends JpaRepository<Demande,Long> {
}
