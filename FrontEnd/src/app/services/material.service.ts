import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private baseUrl = 'http://localhost:8222/api/materials'; // Adjust to match your backend API

  constructor(private http: HttpClient) {}

  // Get all materials
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Get a single material by ID
  getMaterialById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Create a new material
  create(material: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, material);
  }

  // Update an existing material
  update(id: number, material: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, material);
  }

  // Delete a material
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
