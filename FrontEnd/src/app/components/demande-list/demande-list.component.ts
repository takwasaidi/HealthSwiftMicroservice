import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Demande, DemandeService } from 'src/app/services/Demande.service';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent {
  demandes: Demande[] = [];
 
  constructor(private demandeService: DemandeService, private router:Router) {}

  ngOnInit(): void {
    this.demandeService.getAll().subscribe(data => {
      this.demandes = data;
    });
  }

  supprimer(id: number): void {
    if (confirm("Voulez-vous vraiment supprimer cette demande ?")) {
      this.demandeService.delete(id).subscribe(() => {
        this.demandes = this.demandes.filter(d => d.id !== id);
      });
    }
  }
  
  update(id: number): void {
    this.router.navigate(['/demandeUpdate', id]);
  }
  
}
