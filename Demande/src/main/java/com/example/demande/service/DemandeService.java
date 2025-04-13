package com.example.demande.service;

import com.example.demande.client.UserClient;
import com.example.demande.entity.Demande;
import com.example.demande.entity.DemandeDTO;
import com.example.demande.repository.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DemandeService {

    @Autowired
    private DemandeRepository demandeRepository;
    @Autowired
    private UserClient userClient;

    @Autowired
    private EmailService emailService; // Ton service d'envoi d'e-mail
   // @Scheduled(cron = "*/10 * * * * ?")
    @Scheduled(cron = "0 0 9 * * ?")
    public void notifyRefusedDemandesUsers() {
        List<Demande> refusedDemandes = demandeRepository.findByStatut("Rejetee");

        for (Demande demande : refusedDemandes) {
            String userId = demande.getUtilisateurId(); // suppose que ta Demande a un champ userId
            System.out.println(userId);
            try {
                String email = userClient.getUserEmail(userId);

                String subject = "Notification de votre demande refusée";
                String body = "Bonjour,\n\nNous vous informons que votre demande intitulée \"" + demande.getTitre() + "\" a été refusée.\n\nMerci pour votre compréhension.";

                emailService.sendEmail(email, subject, body);

            } catch (Exception e) {
                System.out.println("Erreur lors de l'envoi de mail pour l'utilisateur " + userId + ": " + e.getMessage());
            }
        }
    }


    // Fonction pour récupérer les demandes associées à un Don donné
    public List<DemandeDTO> getDemandesByDonId(Long donId) {
        // Récupérer les demandes associées au don
        List<Demande> demandes = demandeRepository.findByDonId(donId);

        // Convertir les entités Demande en DemandeDTO et les retourner
        return demandes.stream()
                .map(demande -> new DemandeDTO(demande)) // Conversion en DTO
                .collect(Collectors.toList());
    }

    public Demande createDemande(Demande demande,Long donId, String userId) {
        demande.setUtilisateurId(userId);
        demande.setDonId(donId);
        return demandeRepository.save(demande);
    }


    public List<Demande> getAllDemandes() {
        return demandeRepository.findAll();
    }


    public Optional<Demande> getDemandeById(Long id) {
        return demandeRepository.findById(id);
    }


    public Demande updateDemande(Long id, Demande demandeDetails) {
        Demande demande = demandeRepository.findById(id).orElseThrow(() -> new RuntimeException("Demande non trouvée"));
        demande.setTitre(demandeDetails.getTitre());
        demande.setDescription(demandeDetails.getDescription());
        demande.setDate(demandeDetails.getDate());
        demande.setStatut(demandeDetails.getStatut());
        return demandeRepository.save(demande);
    }


    public void deleteDemande(Long id) {
        demandeRepository.deleteById(id);
    }


    public List<Demande> getDemandesByUtilisateurId(String utilisateurId) {
        return demandeRepository.findByUtilisateurId(utilisateurId);
    }
}
