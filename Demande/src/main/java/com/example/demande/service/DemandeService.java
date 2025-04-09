package com.example.demande.service;

import com.example.demande.entity.Demande;
import com.example.demande.repository.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DemandeService {

    @Autowired
    private DemandeRepository demandeRepository;

    public List<Demande> getAllDemandes() {
        return demandeRepository.findAll();
    }

    public Optional<Demande> getDemandeById(Long id) {
        return demandeRepository.findById(id);
    }

    public Demande createDemande(Demande demande) {
        return demandeRepository.save(demande);
    }

    public Demande updateDemande(Long id, Demande updatedDemande) {
        return demandeRepository.findById(id).map(demande -> {
            demande.setTitre(updatedDemande.getTitre());
            demande.setDescription(updatedDemande.getDescription());
            demande.setDate(updatedDemande.getDate());
            demande.setStatut(updatedDemande.getStatut());
            return demandeRepository.save(demande);
        }).orElse(null);
    }

    public boolean deleteDemande(Long id) {
        if (demandeRepository.existsById(id)) {
            demandeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
