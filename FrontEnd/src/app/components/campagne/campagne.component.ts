import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CampagneService } from 'src/app/services/Campagne.service';

@Component({
  selector: 'app-campagne',
  templateUrl: './campagne.component.html',
  styleUrls: ['./campagne.component.css']
})
export class CampagneComponent  {
  campagnes: any[] = []; // Tableau pour stocker les campagnes (objets génériques)

  constructor(private campagneService: CampagneService) {}

  ngOnInit(): void {
    this.getCampagnes(); // Appeler la méthode pour récupérer les campagnes
  }

  // Méthode pour récupérer les campagnes depuis le service
  getCampagnes(): void {
    this.campagneService.getAll().subscribe(
      (data) => {
        this.campagnes = data; // Stocker les campagnes dans le tableau
      },
      (error) => {
        console.error('Erreur lors du chargement des campagnes:', error);
      }
    );
  }
}
