package com.example.donation.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UtilisateurDTO {
    private String id;
    private String nom;
    private String prenom;
    private String email;
    private String role;
}
