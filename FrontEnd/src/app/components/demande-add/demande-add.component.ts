import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande, DemandeService } from 'src/app/services/Demande.service';

@Component({
  selector: 'app-demande-add',
  templateUrl: './demande-add.component.html',
  styleUrls: ['./demande-add.component.css']
})
export class DemandeAddComponent {
  demande: Demande = {
    titre: '',
    description: '',
    date: '',
    statut: 'En attente',
  };

  donId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private demandeService: DemandeService
  ) {}

  ngOnInit(): void {
    this.donId = +this.route.snapshot.paramMap.get('donId')!;
  }

  onSubmit(): void {
   
    this.demandeService.add(this.demande, this.donId).subscribe(() => {
      alert('Demande ajoutée avec succès !');
      this.router.navigate(['/demandes']);
    });
  }
}
