package com.example.donation.service;

import com.example.donation.entity.Campagne;
import com.example.donation.repository.CampagneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CampagneService {

    @Autowired
    private CampagneRepository campagneRepository;

    public List<Campagne> getAllCampagnes() {
        return campagneRepository.findAll();
    }

    public Optional<Campagne> getCampagneById(Long id) {
        return campagneRepository.findById(id);
    }

    public Campagne createCampagne(Campagne campagne) {
        return campagneRepository.save(campagne);
    }

    public Campagne updateCampagne(Long id, Campagne updatedCampagne) {
        return campagneRepository.findById(id).map(campagne -> {
            campagne.setTitre(updatedCampagne.getTitre());
            campagne.setImage(updatedCampagne.getImage());
            campagne.setObjectif(updatedCampagne.getObjectif());
            campagne.setDate_debut(updatedCampagne.getDate_debut());
            campagne.setDate_fin(updatedCampagne.getDate_fin());
            return campagneRepository.save(campagne);
        }).orElse(null);
    }

    public boolean deleteCampagne(Long id) {
        if (campagneRepository.existsById(id)) {
            campagneRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
