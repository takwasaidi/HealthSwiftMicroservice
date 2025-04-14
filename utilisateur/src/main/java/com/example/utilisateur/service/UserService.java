package com.example.utilisateur.service;

import com.example.utilisateur.entity.Utilisateur;
import com.example.utilisateur.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<Utilisateur> getAllUtilisateur() {
        return userRepository.findAll();
    }

    public Utilisateur getUtilisateurById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public Utilisateur createUtilisateur(Utilisateur Utilisateur) {
        return userRepository.save(Utilisateur);
    }


    public boolean deleteUtilisateur(String id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
    //forinternship
    public List<String> getAllUsersID() {
        return userRepository.findAllUserIds();
    }
    public String getUserEmail(String userId){
        return userRepository.findEmailByUserId(userId);
    }

}
