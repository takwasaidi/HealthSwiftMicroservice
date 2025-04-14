import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Demande {
  id?: number;
  titre: string;
  description: string;
  date: string; // au format ISO (ex: '2024-09-22')
  statut: string;
 
}
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private apiUrl = 'http://localhost:8222/api/demande';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<Demande[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<Demande>(`${this.apiUrl}/${id}`);
  }

  getByUserId(utilisateurId: string): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.apiUrl}/user/${utilisateurId}`);
  }

  add(demande: Demande, donId: number): Observable<Demande> {
    return this.http.post<Demande>(
      `${this.apiUrl}/add/${donId}`,
      demande
    );
  }

  // Récupérer une demande par ID
  getDemande(id: string): Observable<Demande> {
    return this.http.get<Demande>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour une demande
  updateDemande(id: string, demande: Demande): Observable<Demande> {
    return this.http.put<Demande>(`${this.apiUrl}/update/${id}`, demande);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

}
