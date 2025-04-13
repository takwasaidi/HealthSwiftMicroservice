package com.example.donation.entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DonWithDemandesDTO {
    private Don don;
    private List<DemandeDTO> demandes;
}
