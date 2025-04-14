import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

interface Evenement {
  id?: number;
  title: string;
  description: string;
  date: string;
  lieu: string;
  duree: string;
  objective: string;
  image: any;
}

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  evenementList: Evenement[] = [];
  selectedEvenement: Evenement | null = null;
  evenementForm: FormGroup;
  isEditMode = false;
  imageUrl: string | ArrayBuffer | null = null;
  searchTitle: string = '';
  selectedIndex: number | null = null;
  imageError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.evenementForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required],
      lieu: ['', [Validators.required, Validators.minLength(3)]],
      duree: ['', [Validators.required, Validators.minLength(1)]],
      objective: ['', [Validators.required, Validators.minLength(5)]],
      image: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    const savedEvents = localStorage.getItem('evenementList');
    if (savedEvents) {
      this.evenementList = JSON.parse(savedEvents);
    }
  }
  

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.evenementForm.patchValue({ image: reader.result });
        this.imageError = false;
      };
      reader.readAsDataURL(file);
    }
  }

  onAddOrUpdateEvenement(): void {
    if (!this.evenementForm.value.image) {
      this.imageError = true;
      return;
    }

    if (this.evenementForm.valid) {
      const formValue = this.evenementForm.value;
      if (this.isEditMode && this.selectedIndex !== null) {
        this.evenementList[this.selectedIndex] = { ...formValue };
      } else {
        this.evenementList.push({ ...formValue });
      }
      this.resetForm();
      const modal = document.querySelector('.modal.show') as HTMLElement;
     
    }
  }

  onSearchByTitle(): void {
    if (this.searchTitle.trim()) {
      this.evenementList = this.evenementList.filter(evenement =>
        evenement.title.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    } else {
      this.ngOnInit();
    }
  }

  onDeleteEvenement(index: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      this.evenementList.splice(index, 1);
    }
  }

  onSelectEvenement(evenement: Evenement, index: number): void {
    this.isEditMode = true;
    this.selectedIndex = index;
    this.selectedEvenement = { ...evenement };
    this.imageUrl = evenement.image;
    this.evenementForm.patchValue(this.selectedEvenement);
    this.imageError = false;
  }

  onOpenAddForm(): void {
    this.isEditMode = false;
    this.resetForm();
  }

  resetForm(): void {
    this.evenementForm.reset();
    this.imageUrl = null;
    this.selectedIndex = null;
    this.selectedEvenement = null;
    this.imageError = false;
  }
}
