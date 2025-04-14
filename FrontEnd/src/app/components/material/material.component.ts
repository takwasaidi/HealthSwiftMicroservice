import { Component } from '@angular/core';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  materials: any[] = [];

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.materialService.getAll().subscribe({
      next: (data: any[]) => this.materials = data,
      error: (err: Error) => console.error('❌ Erreur de chargement des matériaux :', err)
    });
  }

}
