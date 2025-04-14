package com.example.reclamation.service;

import com.example.reclamation.entity.Reclamation;
import com.example.reclamation.repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReclamationService {

    @Autowired
    private ReclamationRepository reclamationRepository;

    public List<Reclamation> getAllReclamations(String userId) {
        return reclamationRepository.findAllByUserId(userId);
    }

    public Reclamation getReclamationById(Long id) {
        return reclamationRepository.findById(id).orElse(null);
    }

    public Reclamation createReclamation(Reclamation reclamation,String userId) {
        reclamation.setUserId(userId);
        reclamation.setStatut("En Attente");
        return reclamationRepository.save(reclamation);
    }

    public Reclamation updateReclamation(Long id, Reclamation updatedReclamation) {
        return reclamationRepository.findById(id).map(reclamation -> {
            reclamation.setTitre(updatedReclamation.getTitre());
            reclamation.setDescription(updatedReclamation.getDescription());
            reclamation.setStatut(updatedReclamation.getStatut());
            reclamation.setType(updatedReclamation.getType());
            return reclamationRepository.save(reclamation);
        }).orElse(null);
    }

    public boolean deleteReclamation(Long id) {
        if (reclamationRepository.existsById(id)) {
            reclamationRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
