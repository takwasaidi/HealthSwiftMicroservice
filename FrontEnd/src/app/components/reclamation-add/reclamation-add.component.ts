import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation-add',
  templateUrl: './reclamation-add.component.html',
  styleUrls: ['./reclamation-add.component.css']
})
export class ReclamationAddComponent implements OnInit {
  reclamationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reclamationForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      dateCreation: new Date().toISOString()
    });
  }

  // Submit the form
  onSubmit(): void {
    if (this.reclamationForm.valid) {
      this.reclamationService.createReclamation(this.reclamationForm.value).subscribe(
        (data) => {
          // Navigate to the reclamations list after successful submission
          this.router.navigate(['/reclamations']);
        },
        (error) => {
          console.error('Error creating reclamation', error);
        }
      );
    }
  }
}
