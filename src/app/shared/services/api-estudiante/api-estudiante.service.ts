import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudianteCreate } from '../../../business/models/estudiante-crear';
import { Estudiante } from '../../../business/models/estudiante';
@Injectable({
  providedIn: 'root'
})
export class ApiEstudianteService {
  private apiUrl = 'https://localhost:8080/estudiantes'; // Replace with your API URL
  constructor(private http:HttpClient) { }
  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  createEstudiante(estudiante: EstudianteCreate): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, estudiante);
  }
  updateEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.apiUrl}/${estudiante.id}`, estudiante);
  }
}
