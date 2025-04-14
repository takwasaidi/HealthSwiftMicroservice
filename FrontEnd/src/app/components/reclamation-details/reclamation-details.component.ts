import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService,Reclamation } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-detail',
  templateUrl: './reclamation-details.component.html',
  styleUrls: ['./reclamation-details.component.css']
})
export class ReclamationDetailComponent implements OnInit {
  reclamation: Reclamation | null = null;

  constructor(
    private route: ActivatedRoute,
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the ID from the route parameters
    const reclamationId = this.route.snapshot.paramMap.get('id');
    
    // Fetch the reclamation data based on the ID
    if (reclamationId) {
      this.reclamationService.getReclamationById(+reclamationId).subscribe(
        (data) => {
          this.reclamation = data;
        },
        (error) => {
          console.error('Error fetching reclamation details', error);
        }
      );
    }
  }

  // Method for handling the update button click
  onUpdate(): void {
    if (this.reclamation) {
      this.router.navigate(['/reclamations/edit', this.reclamation.id]);
    }
  }

  // Method for handling the delete button click
  onDelete(): void {
    if (this.reclamation) {
      this.reclamationService.deleteReclamation(this.reclamation.id!).subscribe(
        () => {
          this.router.navigate(['/reclamations']);
        },
        (error) => {
          console.error('Error deleting reclamation', error);
        }
      );
    }
  }
}
