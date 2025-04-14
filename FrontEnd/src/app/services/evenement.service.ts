import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private baseUrl = 'http://localhost:8093/api/evenementactualite';

  constructor(private http: HttpClient) {}

  getAllEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(this.baseUrl);
  }

  getEvenementById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.baseUrl}/${id}`);
  }

  createEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(this.baseUrl, evenement, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateEvenement(id: number, evenement: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.baseUrl}/${id}`, evenement, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteEvenement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  searchByTitre(titre: string): Observable<Evenement> {
    return this.http.post<Evenement>(
      `${this.baseUrl}/search`,
      titre,
      {
        headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
      }
    );
  }
  // New method to upload the image
  uploadImage(file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file); // Match the backend's @RequestParam("file")
    return this.http.post<{ url: string }>(`${this.baseUrl}/upload`, formData);
  }
} 