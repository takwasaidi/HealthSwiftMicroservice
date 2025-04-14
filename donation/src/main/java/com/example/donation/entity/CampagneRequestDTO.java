package com.example.donation.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CampagneRequestDTO {
    private String titre;
    private String image;
    private String objectif;
    private LocalDate date_debut;
    private LocalDate date_fin;
}
