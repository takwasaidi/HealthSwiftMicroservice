import { Component, OnInit } from '@angular/core';
import { ReclamationService,Reclamation } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe(data => {
      this.reclamations = data;
    });
  }
}
