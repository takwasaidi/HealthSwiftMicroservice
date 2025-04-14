package com.example.demande.entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DemandeDTO {
    private Long id;
    private String titre;

    private String description;
    public DemandeDTO(Demande demande) {
        this.id = demande.getId();
        this.titre = demande.getTitre();
        this.description = demande.getDescription();

    }
}
