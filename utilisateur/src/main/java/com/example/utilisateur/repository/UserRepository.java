package com.example.utilisateur.repository;

import com.example.utilisateur.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<Utilisateur,String> {
    @Query("SELECT u.userId FROM Utilisateur u")
    List<String> findAllUserIds();
    @Query("SELECT u.email FROM Utilisateur u WHERE u.userId = :userId")
    String findEmailByUserId(String userId);
}
