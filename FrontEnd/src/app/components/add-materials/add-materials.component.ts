import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialService } from '../../services/material.service';
import { CampagneService } from 'src/app/services/Campagne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.css']
})
export class AddMaterialsComponent implements OnInit {
  materialForm!: FormGroup;
  campagnes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private campagneService: CampagneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      campaign_id: ['', Validators.required]
    });

    this.campagneService.getAll().subscribe({
      next: (res) => this.campagnes = res,
      error: (err) => console.error('Erreur récupération campagnes', err)
    });
  }
  selectedImage: File | null = null;

  onImageSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

  onSubmit(): void {
    if (this.materialForm.valid) {
      this.materialService.create(this.materialForm.value).subscribe({
        next: () => {
          console.log(this.materialForm.value);
          alert('✅ Matériel ajouté avec succès');
          this.router.navigate(['/materials']);
          this.materialForm.reset();
        },
        error: (err: Error) => {
          alert('❌ Erreur: ' + err.message);
        }
      });
    }
  }
}
