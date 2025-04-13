import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonService } from 'src/app/services/Don.service';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {

  dons: any[] = [];

  constructor(private donService: DonService,
    private router: Router // Injecter le service Router
  ) {}

  ngOnInit(): void {
    this.donService.getAllDons().subscribe({
      next: (res) => {
        this.dons = res;
        console.log('Liste des dons récupérée :', this.dons);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des dons :', err);
      }
    });
  }
  deleteDon(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce don ?')) {
      this.donService.deleteDon(id).subscribe({
        next: () => {
          console.log('Don supprimé avec succès');
          this.router.navigate(['/dons']); // Rediriger vers la liste des dons
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du don', err);
        }
      });
    }
  }
}
