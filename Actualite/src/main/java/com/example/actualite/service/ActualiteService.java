package com.example.actualite.service;

import com.example.actualite.entity.Actualite;
import com.example.actualite.repository.ActualiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActualiteService {

    @Autowired
    private ActualiteRepository actualiteRepository;

    public List<Actualite> getAllActualites() {
        return actualiteRepository.findAll();
    }

    public Optional<Actualite> getActualiteById(Long id) {
        return actualiteRepository.findById(id);
    }

    public Actualite createActualite(Actualite actualite) {
        return actualiteRepository.save(actualite);
    }

    public Actualite updateActualite(Long id, Actualite updatedActualite) {
        return actualiteRepository.findById(id).map(actualite -> {
            actualite.setTitre(updatedActualite.getTitre());
            actualite.setDescription(updatedActualite.getDescription());
            actualite.setType_pub_cible(updatedActualite.getType_pub_cible());
            actualite.setTheme(updatedActualite.getTheme());
            actualite.setImage(updatedActualite.getImage());
            actualite.setIdEvent(updatedActualite.getIdEvent());
            return actualiteRepository.save(actualite);
        }).orElse(null);
    }

    public boolean deleteActualite(Long id) {
        if (actualiteRepository.existsById(id)) {
            actualiteRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
