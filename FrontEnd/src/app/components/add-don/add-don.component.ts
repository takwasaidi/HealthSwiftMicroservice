import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampagneService } from 'src/app/services/Campagne.service';
import { DonService } from 'src/app/services/Don.service';

@Component({
  selector: 'app-add-don',
  templateUrl: './add-don.component.html',
  styleUrls: ['./add-don.component.css']
})
export class AddDonComponent {
  donForm: FormGroup;
  campagnes: any[] = []; // Liste des campagnes récupérées

  constructor(
    private fb: FormBuilder,
    private donService: DonService,
    private campagneService: CampagneService,
    private router: Router,
    private datePipe: DatePipe // ✅ injecte ici
  ) { 
    this.donForm = this.fb.group({
      montant: ['', Validators.required],
      dateRemise: ['', Validators.required],
      type: ['', Validators.required],
      campagneId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.campagneService.getAll().subscribe({
      next: (res) => {
        this.campagnes = res;  // Remplir la liste des campagnes
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des campagnes', err);
      }
    });
  }

  onSubmit(): void {
    if (this.donForm.valid) {
      const formData = this.donForm.value;
  
      // 🔄 Formater la date ici
      const formattedDate = this.datePipe.transform(formData.dateRemise, 'yyyy-MM-dd');
      formData.dateRemise = formattedDate;
  
      // Mapper campagneId en objet Campagne
      formData.campagne = { id: formData.campagneId };
  
      // Appel du service
      this.donService.addDon(formData, formData.campagne.id).subscribe({
        next: (res) => {
          console.log('Don ajouté avec succès', res);
          this.router.navigate(['/dons']);
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du don', err);
        }
      });
    }
  }
  
}
