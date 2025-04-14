package com.example.reclamation.repository;

import com.example.reclamation.entity.Reclamation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReclamationRepository extends JpaRepository<Reclamation,Long> {
    List<Reclamation> findAllByUserId(String userId);
}
