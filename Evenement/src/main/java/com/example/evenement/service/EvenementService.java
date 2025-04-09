package com.example.evenement.service;

import com.example.evenement.entity.Evenement;
import com.example.evenement.repository.EvenementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EvenementService {

    @Autowired
    private EvenementRepository evenementRepository;

    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }

    public Optional<Evenement> getEvenementById(Long id) {
        return evenementRepository.findById(id);
    }

    public Evenement createEvenement(Evenement evenement) {
        return evenementRepository.save(evenement);
    }

    public Evenement updateEvenement(Long id, Evenement updatedEvenement) {
        return evenementRepository.findById(id).map(e -> {
            e.setTitre(updatedEvenement.getTitre());
            e.setDate(updatedEvenement.getDate());
            e.setLieu(updatedEvenement.getLieu());
            e.setDuree(updatedEvenement.getDuree());
            e.setObjective(updatedEvenement.getObjective());
            e.setImage(updatedEvenement.getImage());
            return evenementRepository.save(e);
        }).orElse(null);
    }

    public boolean deleteEvenement(Long id) {
        if (evenementRepository.existsById(id)) {
            evenementRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
