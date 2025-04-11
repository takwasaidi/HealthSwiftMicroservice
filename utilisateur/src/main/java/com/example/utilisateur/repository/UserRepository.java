package com.example.utilisateur.repository;

import com.example.utilisateur.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Utilisateur,String> {
}
