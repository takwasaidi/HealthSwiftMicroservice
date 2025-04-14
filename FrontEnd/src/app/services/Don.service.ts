import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Don } from '../models/Don';
import { DonDTO } from '../models/DonDTO';

@Injectable({
  providedIn: 'root'
})
export class DonService {


  private apiUrl = 'http://localhost:8222/api/don';

  constructor(private http: HttpClient) {}

  getDonWithDemandes(id: number): Observable<DonDTO> {
    return this.http.get<DonDTO>(`${this.apiUrl}/getDonWithDemandes/${id}`);
  }

  getAllDons(): Observable<Don[]> {
    return this.http.get<Don[]>(`${this.apiUrl}`);
  }

  getDonById(id: number): Observable<Don> {
    return this.http.get<Don>(`${this.apiUrl}/${id}`);
  }

   // Ajouter un Don
   addDon(don: any, idCampagne: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${idCampagne}`, don);
  }
   
   createDon(don: any, idCampagne: number): Observable<any> {
    const url = `${this.apiUrl}/${idCampagne}`; 
    return this.http.post(url, don);
  }


  updateDon(id: number, updatedData: any) {
    return this.http.put(`${this.apiUrl}/${id}`, updatedData);
  }

  deleteDon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
