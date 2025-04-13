import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampagneService {
  private apiUrl = 'http://localhost:8222/api/don/campagne';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


 // Créer une nouvelle campagne avec FormData
  create(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  updateCampagne(id: number, data: any): Observable<any> {
    // Crée un objet FormData ou juste un objet JSON si tu ne manipules pas d'images
    const campagneData = {
      titre: data.titre,
      objectif: data.objectif,
      date_debut: data.date_debut,
      date_fin: data.date_fin,
      // Tu peux inclure l'image ici si nécessaire
      image: data.image // Ou une logique pour gérer l'image
    };
  
    return this.http.put(`${this.apiUrl}/${id}`, campagneData);
  }
  
  

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getCampagneById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
}
