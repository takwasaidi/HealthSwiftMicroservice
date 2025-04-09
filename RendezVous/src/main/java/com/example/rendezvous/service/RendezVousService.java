package com.example.rendezvous.service;

import com.example.rendezvous.entity.RendezVous;
import com.example.rendezvous.repository.RendezVousRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RendezVousService {

    @Autowired
    private RendezVousRepository rendezVousRepository;

    public List<RendezVous> getAllRendezVous() {
        return rendezVousRepository.findAll();
    }

    public Optional<RendezVous> getRendezVousById(int id) {
        return rendezVousRepository.findById(id);
    }

    public RendezVous createRendezVous(RendezVous rendezVous) {
        return rendezVousRepository.save(rendezVous);
    }

    public RendezVous updateRendezVous(int id, RendezVous updatedRendezVous) {
        return rendezVousRepository.findById(id).map(r -> {
            r.setDate(updatedRendezVous.getDate());
            r.setLieu(updatedRendezVous.getLieu());
            r.setObjectif(updatedRendezVous.getObjectif());
            return rendezVousRepository.save(r);
        }).orElse(null);
    }

    public boolean deleteRendezVous(int id) {
        if (rendezVousRepository.existsById(id)) {
            rendezVousRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
