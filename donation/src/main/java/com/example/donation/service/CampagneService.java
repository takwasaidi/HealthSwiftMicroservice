package com.example.donation.service;

import com.example.donation.entity.Campagne;
import com.example.donation.repository.CampagneRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
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

    public Campagne createCampagne(Campagne campagne, MultipartFile image) {
        if (image.isEmpty()) {
            throw new IllegalArgumentException("L'image ne peut pas être vide");
        }

        // Créer un nom de fichier unique pour éviter les conflits
        String originalFilename = image.getOriginalFilename();
        String filename = System.currentTimeMillis() + "_" + originalFilename;

        try {
            Path uploadPath = Paths.get(uploadDirectory);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Chemin complet pour le fichier
            Path filePath = uploadPath.resolve(filename);
            Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Enregistrer l'image dans la base de données
            campagne.setImage(filename);
            return campagneRepository.save(campagne);
        } catch (IOException e) {
            throw new RuntimeException("Échec de l'enregistrement de l'image", e);
        }
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
    @Value("${upload.directory}")
    private String uploadDirectory;  // Dossier où les images seront stockées
    // Méthode pour l'upload de l'image
    public String uploadImage(MultipartFile file) throws IOException {
        // Créer un nom unique pour le fichier
        String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        // Définir le chemin du fichier dans le dossier de stockage
        Path filepath = Paths.get(uploadDirectory, filename);

        // Créer le dossier si nécessaire
        File dir = new File(uploadDirectory);
        if (!dir.exists()) {
            dir.mkdirs();  // Créer le dossier si il n'existe pas
        }

        // Sauvegarder le fichier
        file.transferTo(filepath.toFile());

        // Retourner le nom du fichier pour l'enregistrer dans la base de données
        return filename;
    }
}
