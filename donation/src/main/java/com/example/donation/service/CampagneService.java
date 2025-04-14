package com.example.donation.service;

import com.example.donation.entity.Campagne;
import com.example.donation.entity.CampagneRequestDTO;
import com.example.donation.repository.CampagneRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CampagneService {

    @Autowired
    private CampagneRepository campagneRepository;





    public Campagne ajouterCampagne(CampagneRequestDTO dto ,String userId) {

        Campagne campagne = new Campagne();
        campagne.setTitre(dto.getTitre());
        campagne.setImage(dto.getImage());
        campagne.setObjectif(dto.getObjectif());
        campagne.setDate_debut(dto.getDate_debut());
        campagne.setDate_fin(dto.getDate_fin());
        campagne.setUtilisateurId(userId);
        return campagneRepository.save(campagne);
    }

    public List<Campagne> getAllCampagnes() {
        return campagneRepository.findAll();
    }

    public Optional<Campagne> getCampagneById(Long id) {
        return campagneRepository.findById(id);
    }

    public Campagne updateCampagne(Long id, Campagne updatedCampagne) {
        Campagne existingCampagne = campagneRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Campagne non trouvée"));
        // Mise à jour des champs
        existingCampagne.setTitre(updatedCampagne.getTitre());
        existingCampagne.setObjectif(updatedCampagne.getObjectif());
        existingCampagne.setDate_debut(updatedCampagne.getDate_debut());
        existingCampagne.setDate_fin(updatedCampagne.getDate_fin());

        return campagneRepository.save(existingCampagne);
    }


    public boolean deleteCampagne(Long id) {
        if (campagneRepository.existsById(id)) {
            campagneRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
