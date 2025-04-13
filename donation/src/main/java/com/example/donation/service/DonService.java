package com.example.donation.service;

import com.example.donation.entity.Campagne;
import com.example.donation.entity.Don;
import com.example.donation.repository.CampagneRepository;
import com.example.donation.repository.DonRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonService {

    @Autowired
    private DonRepository donRepository;
    @Autowired
    private CampagneRepository campagneRepository;

    public List<Don> getAllDons() {
        return donRepository.findAll();
    }

    public Optional<Don> getDonById(Long id) {
        return donRepository.findById(id);
    }

    public Don createDon(Don don , Long idCampagne) {
        Campagne campagne = campagneRepository.findById(idCampagne)
                .orElseThrow(() -> new EntityNotFoundException("Catégorie non trouvée"));
         don.setCampagne(campagne);
        return donRepository.save(don);
    }

    public Don updateDon(Long id, Don updatedDon) {
        return donRepository.findById(id).map(don -> {
            don.setMontant(updatedDon.getMontant());
            don.setDate_remise(updatedDon.getDate_remise());
            don.setType(updatedDon.getType());
            don.setCampagne(updatedDon.getCampagne());
            return donRepository.save(don);
        }).orElse(null);
    }

    public boolean deleteDon(Long id) {
        if (donRepository.existsById(id)) {
            donRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
