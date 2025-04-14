package com.example.donation.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonDTO {
    private Long id;
    private String montant;
    private LocalDate dateRemise;
    private String type;
    private CampagneRequestDTO campagne;
    private List<DemandeDTO> demandes;
}
