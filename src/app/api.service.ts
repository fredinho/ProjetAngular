import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Tache } from './models/Tache';
import { Employee } from './models/Employee';
import { Validation } from './models/Validation';
import { Vehicule } from './models/Vehicule';
import { Personne } from './models/Personne';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8; Accept-Enconding',
    'Access-Control-Allow-Origin': '*'
  })
};
const apiUrlTask = 'http://localhost:8082/Todo/api/tache/';
const apiUrlEmpl = 'http://localhost:8082/Todo/api/employees/';
const apiUrlNtiers = 'https://25.78.244.229:4000/api/person/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getValidation(): Observable<Validation[]> {
    return this.http.get<Validation[]>(`${apiUrlNtiers}` +"getValidations")
      .pipe(
        tap(taches => console.log('fetched valiation')),
        catchError(this.handleError('getValidation', []))
      );
  }
  updateValidation(validation : Validation): Observable<any> {
    const url = `${apiUrlNtiers}` + "updateValidation/"+ validation.validationId;
    return this.http.put(url, validation).pipe(
      tap(_ => console.log(`updated valiation id=${validation.validationId}`)),
      catchError(this.handleError<any>('updateValidation'))
    );
  }

  getTache(): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${apiUrlTask}`)
      .pipe(
        tap(taches => console.log('fetched Taches')),
        catchError(this.handleError('getTache', []))
      );
  }
  
  deleteTache(id: number): Observable<Tache> {
    const url = `${apiUrlTask}/${id}`;
    return this.http.delete<Tache>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted task id=${id}`)),
      catchError(this.handleError<Tache>('deleteTache'))
    );
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${apiUrlEmpl}`)
      .pipe(
        tap(taches => console.log('fetched Employ')),
        catchError(this.handleError('getTache', []))
      );
  }

  addEmployee(empl: Employee): Observable<Employee> {
    console.log(empl)
    return this.http.post<Employee>(apiUrlEmpl, empl, httpOptions).pipe(
      tap((c: Employee) => console.log(`added empl w/ id=${c.id}`)),
      catchError(this.handleError<Employee>('addCases'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
      
      return of(result as T);
    };
  }
}
