import { Injectable } from '@angular/core';
import { Computer } from '../models/computer';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  apiUrl = "http://localhost:3000/computers"
  marques = ["Dell", "HP", "Apple", "Asus"];
  types = ["Portable", "Fixe", "Tablette hybride",];
  categorys = ["Gaming", "Bureautique", "Premier prix"];

  constructor(private http: HttpClient) {

  }

  //accé  a tout les données du server json 
  getAllComputer(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getComputerById(id: number): Observable<Computer> {
    return this.http.get<Computer>(`${this.apiUrl}/${id}`)
      .pipe(retry(1),
        catchError(this.handleError));
  }

  addComputer(computer: Computer): Observable<Computer> {
    return this.http.post<Computer>(this.apiUrl, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editComputer(computer: Computer): Observable<Computer> {
    return this.http.put<Computer>(`${this.apiUrl}/${computer.id}`, computer)
      .pipe(retry(1),
        catchError(this.handleError));
  }

  deleteComputer(id: number): Observable<Computer> {
    return this.http.delete<Computer>(`${this.apiUrl}/${id}`)
      .pipe(retry(1),
        catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
