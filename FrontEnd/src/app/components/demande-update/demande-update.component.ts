import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande, DemandeService } from 'src/app/services/Demande.service';

@Component({
  selector: 'app-demande-update',
  templateUrl: './demande-update.component.html',
  styleUrls: ['./demande-update.component.css']
})
export class DemandeUpdateComponent {
  demande: Demande = {
    titre: '',
    description: '',
    date: '',
    statut: 'En attente',
  };

  constructor(
    private demandeService: DemandeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.demandeService.getDemande(id).subscribe((data) => {
      this.demande = data;
    });
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.demandeService.updateDemande(id, this.demande).subscribe(() => {
      this.router.navigate(['/demandes']); // Rediriger vers la liste des demandes
    });
  }
}
