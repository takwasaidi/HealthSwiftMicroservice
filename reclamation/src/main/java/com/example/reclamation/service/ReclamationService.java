package com.example.reclamation.service;

import com.example.reclamation.entity.Reclamation;
import com.example.reclamation.repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReclamationService {

    @Autowired
    private ReclamationRepository reclamationRepository;

    public List<Reclamation> getAllReclamations() {
        return reclamationRepository.findAll();
    }

    public Optional<Reclamation> getReclamationById(Long id) {
        return reclamationRepository.findById(id);
    }

    public Reclamation createReclamation(Reclamation reclamation) {
        return reclamationRepository.save(reclamation);
    }

    public Reclamation updateReclamation(Long id, Reclamation updatedReclamation) {
        return reclamationRepository.findById(id).map(reclamation -> {
            reclamation.setTitre(updatedReclamation.getTitre());
            reclamation.setDescription(updatedReclamation.getDescription());
            reclamation.setStatut(updatedReclamation.getStatut());
            reclamation.setDateCreation(updatedReclamation.getDateCreation());
            reclamation.setType(updatedReclamation.getType());
            reclamation.setUtilisateurId(updatedReclamation.getUtilisateurId());
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
