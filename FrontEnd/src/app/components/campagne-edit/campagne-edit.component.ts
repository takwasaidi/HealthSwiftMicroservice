import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneService } from 'src/app/services/Campagne.service';

@Component({
  selector: 'app-campagne-edit',
  templateUrl: './campagne-edit.component.html',
  styleUrls: ['./campagne-edit.component.css']
})
export class CampagneEditComponent implements OnInit {
  campagneForm = this.fb.group({
    titre: [''],
    objectif: [''],
    date_debut: [''],
    date_fin: ['']
  });
  
  selectedImage?: File; // Utilisation de `undefined` à la place de `null`

  campagneId!: number; // récupéré depuis route par exemple
  
  constructor(
    private campagneService: CampagneService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'id de la campagne depuis l'URL
    this.campagneId = this.route.snapshot.params['id']; 
    this.loadCampagneDetails();
  }

  // Charger les détails de la campagne pour pré-remplir le formulaire
  loadCampagneDetails(): void {
    this.campagneService.getCampagneById(this.campagneId).subscribe({
      next: (campagne) => {
        this.campagneForm.setValue({
          titre: campagne.titre,
          objectif: campagne.objectif,
          date_debut: campagne.date_debut,
          date_fin: campagne.date_fin
        });
      },
      error: (err) => console.error('Erreur de chargement des données de la campagne', err)
    });
  }

  // Gestion de la sélection de fichier (image)
  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  onSubmit(): void {
    const data = this.campagneForm.value;
    this.campagneService.updateCampagne(this.campagneId, data).subscribe({
      next: res => {
        console.log('Campagne mise à jour', res);
        this.router.navigate(['/campagne']); // ✅ redirection ici
      },
      error: err => console.error('Erreur de mise à jour', err)
    });
  }
  
  
  
}
