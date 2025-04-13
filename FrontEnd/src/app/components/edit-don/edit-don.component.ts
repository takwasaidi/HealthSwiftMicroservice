import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneService } from 'src/app/services/Campagne.service';
import { DonService } from 'src/app/services/Don.service';

@Component({
  selector: 'app-edit-don',
  templateUrl: './edit-don.component.html',
  styleUrls: ['./edit-don.component.css']
})
export class EditDonComponent implements OnInit {
  donForm: FormGroup;
  campagnes: any[] = [];
  donId!: number;
  currentCampagneId!: number;  // ID de la campagne actuelle

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private donService: DonService,
    private campagneService: CampagneService
  ) {
    this.donForm = this.fb.group({
      montant: ['', Validators.required],
      dateRemise: ['', Validators.required],
      type: ['', Validators.required],
      campagneId: ['']  // Le champ campagneId
    });
  }

  ngOnInit(): void {
    this.donId = Number(this.route.snapshot.paramMap.get('id'));

    // Charger la liste des campagnes
    this.campagneService.getAll().subscribe({
      next: (res) => {
        this.campagnes = res;
        
        // Charger les données du don à modifier
        this.donService.getDonById(this.donId).subscribe({
          next: (don) => {
            // Pré-sélectionner la campagne actuelle dans le formulaire
            this.currentCampagneId = don.campagneId;  // Sauvegarder l'ID actuel de la campagne
            this.donForm.patchValue({
              montant: don.montant,
              dateRemise: don.dateRemise, // format 'yyyy-MM-dd'
              type: don.type,
              campagneId: this.currentCampagneId  // Pré-sélectionner la campagne existante
            });
          },
          error: (err) => console.error('Erreur récupération du don', err)
        });
      },
      error: (err) => console.error('Erreur récupération des campagnes', err)
    });
  }

  onSubmit(): void {
    if (this.donForm.valid) {
      const formData = this.donForm.value;

      // Si aucune nouvelle campagne n'est sélectionnée, garder l'ID actuel de la campagne
      if (!formData.campagneId) {
        formData.campagneId = this.currentCampagneId;
      }

      formData.campagne = { id: formData.campagneId };
      formData.dateRemise = new Date(formData.dateRemise).toISOString().slice(0, 10); // yyyy-MM-dd

      console.log(formData);  // Afficher les données du formulaire avant l'envoi

      this.donService.updateDon(this.donId, formData).subscribe({
        next: () => this.router.navigate(['/dons']),
        error: (err) => console.error('Erreur lors de la mise à jour', err)
      });
    }
  }
}