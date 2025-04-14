import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrls: ['./material-details.component.css']
})
export class MaterialDetailsComponent implements OnInit {
  material: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private materialService: MaterialService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const idNumber = +id;

      if (!isNaN(idNumber)) {
        this.materialService.getMaterialById(idNumber).subscribe({
          next: (data) => {
            this.material = data;
          },
          error: (error) => {
            console.error("Erreur lors de la récupération du matériel", error);
          }
        });
      } else {
        console.error("ID invalide", id);
      }
    } else {
      console.error("ID de matériel manquant");
    }
  }

  onUpdate() {
    this.router.navigate(['/materialsUpdate', this.material.id]);
  }

  onDelete() {
    if (confirm('Voulez-vous vraiment supprimer ce matériel ?')) {
      this.materialService.delete(this.material.id).subscribe(() => {
        alert('Matériel supprimé');
        this.router.navigate(['/materials']);
      });
    }
  }
}
