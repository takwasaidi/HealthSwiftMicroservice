import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampagneService } from 'src/app/services/Campagne.service';

@Component({
  selector: 'app-campagne-details',
  templateUrl: './campagne-details.component.html',
  styleUrls: ['./campagne-details.component.css']
})
export class CampagneDetailsComponent implements OnInit{
  campagne: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // ⬅️ injecte Router ici
    private campagneService: CampagneService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    // Vérifier que l'ID n'est pas null et le convertir en nombre
    if (id) {
      const idNumber = +id;  // Utilisation de l'opérateur '+' pour convertir en number
      
      // Vérifier si la conversion a bien fonctionné
      if (!isNaN(idNumber)) {
        this.campagneService.getCampagneById(idNumber).subscribe(data => {
          this.campagne = data;
        }, error => {
          console.error("Erreur de récupération de la campagne", error);
        });
      } else {
        console.error("ID invalide", id);
        // Gérer l'erreur d'ID invalide
      }
    } else {
      console.error("ID de campagne manquant");
      // Gérer le cas où l'ID est manquant
    }
  }
  
  onUpdate() {
    // Redirection vers la page de modification
    this.router.navigate(['/campagnes/update', this.campagne.id]);
  }
  
  onDelete() {
    if (confirm('Voulez-vous vraiment supprimer cette campagne ?')) {
      this.campagneService.delete(this.campagne.id).subscribe(() => {
        alert('Campagne supprimée');
        this.router.navigate(['/campagne']);
      });
    }
  }
  
}
