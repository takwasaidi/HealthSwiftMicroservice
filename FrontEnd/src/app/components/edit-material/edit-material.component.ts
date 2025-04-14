import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/services/material.service';
import { CampagneService } from 'src/app/services/Campagne.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent implements OnInit {
  materialForm: FormGroup;
  campagnes: any[] = [];
  materialId!: number;
  currentCampaign_id!: number;  // ID of the current campaign

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private materialService: MaterialService,
    private campagneService: CampagneService
  ) {
    this.materialForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      donated_by: ['', Validators.required],
      campaign_id: ['', Validators.required]  // Campaign ID field
    });
  }

  ngOnInit(): void {
    this.materialId = Number(this.route.snapshot.paramMap.get('id'));

    // Load list of campaigns
    this.campagneService.getAll().subscribe({
      next: (res) => {
        this.campagnes = res;
        
        // Load the material to be edited
        this.materialService.getMaterialById(this.materialId).subscribe({
          next: (material) => {
            // Pre-select the current campaign in the form
            this.currentCampaign_id = material.campaign_id;  // Save the current campaign ID
            this.materialForm.patchValue({
              name: material.name,
              description: material.description,
              quantity: material.quantity,
              donated_by: material.donated_by,
              campagneId: this.currentCampaign_id  // Pre-select existing campaign
            });
          },
          error: (err) => console.error('Error fetching material', err)
        });
      },
      error: (err) => console.error('Error fetching campaigns', err)
    });
  }

  onSubmit(): void {
    if (this.materialForm.valid) {
      const formData = this.materialForm.value;

      // If no new campaign is selected, keep the current campaign ID
      if (!formData.campagneId) {
        formData.campagneId = this.currentCampaign_id;
      }

      formData.campagne = { id: formData.campaign_id };

      console.log(formData);  // Show form data before submission

      this.materialService.update(this.materialId, formData).subscribe({
        next: () => this.router.navigate(['/materials']),
        error: (err) => console.error('Error during update', err)
      });
    }
  }
}
