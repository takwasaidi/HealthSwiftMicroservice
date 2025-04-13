import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CampagneRequest, CampagneService } from 'src/app/services/Campagne.service';

@Component({
  selector: 'app-campagne-add',
  templateUrl: './campagne-add.component.html',
  styleUrls: ['./campagne-add.component.css']
})
export class CampagneAddComponent {
 
 
  campagne = {
    titre: '',
    objectif: '',
    date_debut: '',
    date_fin: '',
    image: '' // on ajoute ce champ ici
  };

  selectedFile: File | null = null;
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {} 


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.campagne.image = this.selectedFile.name; // juste le nom
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.message = "Veuillez sélectionner une image.";
      return;
    }


    console.log('JSON à envoyer :', this.campagne);

    this.http.post('http://localhost:8222/api/don/campagne/add', this.campagne)
      .subscribe({
        next: (res) => {
          this.message = "Campagne ajoutée avec succès.";
          console.log(res);
           // Redirection vers /campagne
           this.router.navigate(['/campagne']);
        },
        error: (err) => {
          this.message = "Erreur lors de l'ajout de la campagne.";
          console.error(err);
        }
      });
  }


}
