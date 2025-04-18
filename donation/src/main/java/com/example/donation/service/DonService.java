package com.example.donation.service;

import com.example.donation.client.DemandeClient;
import com.example.donation.client.UserClient;
import com.example.donation.entity.*;
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

    @Autowired
    private DemandeClient demandeClient;
    @Autowired
    private UserClient userClient;

    @Autowired
    private EmailService emailService;

    public DonWithDemandesDTO getDonWithDemandes(Long donId) {
        // Récupérer le Don en fonction de son ID
        Don don = donRepository.findById(donId).orElseThrow(() -> new RuntimeException("Don not found"));

        // Utilisation de Feign pour récupérer les demandes associées à ce Don
        List<DemandeDTO> demandes = demandeClient.getDemandesByDonId(donId);

        // Créer un DTO personnalisé pour renvoyer les informations du Don avec ses demandes
        DonWithDemandesDTO donWithDemandesDTO = new DonWithDemandesDTO();
        donWithDemandesDTO.setDon(don);
        donWithDemandesDTO.setDemandes(demandes);

        // Retourner le DTO
        return donWithDemandesDTO;
    }


    public List<Don> getAllDons() {
        return donRepository.findAll();
    }

    public Optional<Don> getDonById(Long id) {
        return donRepository.findById(id);
    }

    public Don createDon(Don don , Long idCampagne , String userId) {
        Campagne campagne = campagneRepository.findById(idCampagne)
                .orElseThrow(() -> new EntityNotFoundException("Campagne non trouvée"));

        don.setCampagne(campagne);
        don.setUtilisateur_id(userId);
        Don savedDon = donRepository.save(don);

        try {
            String email = userClient.getUserEmail(userId);
            System.out.println("Email récupéré pour " + userId + " : " + email);

            if (email != null && !email.isBlank()) {
                emailService.sendThankYouEmail(
                        email,
                        userId,
                        String.valueOf(savedDon.getMontant()),
                        campagne.getTitre()
                );
            } else {
                System.err.println("Email introuvable pour l'utilisateur : " + userId);
            }

        } catch (Exception e) {
            System.err.println("Erreur lors de l'envoi de mail pour l'utilisateur " + userId + " : " + e.getMessage());
        }

        return savedDon;
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
