import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService,Reclamation } from 'src/app/services/reclamation.service';  // Adjust the path if necessary

@Component({
  selector: 'app-reclamation-edit',
  templateUrl: './reclamation-edit.component.html',
  styleUrls: ['./reclamation-edit.component.css']
})
export class ReclamationEditComponent implements OnInit {
  reclamationForm = this.fb.group({
    titre: [''],
    description: [''],
    statut: [''],
    type: ['']
  });

  reclamationId!: number; // ID fetched from the route

  constructor(
    private reclamationService: ReclamationService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get reclamationId from the route
    this.reclamationId = this.route.snapshot.params['id'];
    this.loadReclamationDetails();
  }

  // Load reclamation details to pre-fill the form
  loadReclamationDetails(): void {
    this.reclamationService.getReclamationById(this.reclamationId).subscribe({
      next: (reclamation) => {
        this.reclamationForm.setValue({
          titre: reclamation.titre,
          description: reclamation.description,
          statut: reclamation.statut,
          type: reclamation.type
        });
      },
      error: (err) => console.error('Error loading reclamation details', err)
    });
  }

  // Submit updated reclamation data
  onSubmit(): void {
    const formValue = this.reclamationForm.value;
    const data: Reclamation = {
      id: this.reclamationId,
      titre: formValue.titre || '',
      description: formValue.description || '',
      statut: formValue.statut || '',
      type: formValue.type || '',
      dateCreation: new Date().toISOString()
    };
    
    this.reclamationService.updateReclamation(this.reclamationId, data).subscribe({
      next: res => {
        console.log('Reclamation updated', res);
        this.router.navigate(['/reclamations']);
      },
      error: err => console.error('Error updating reclamation', err)
    });
  }
}
