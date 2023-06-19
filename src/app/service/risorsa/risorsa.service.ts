import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Risorsa } from 'src/app/model/risorsa';

@Injectable({
  providedIn: 'root'
})
export class RisorsaService {

  private risorsaUrl = 'http://localhost:8080/coge/api/risorsa';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getRisorse(): Observable<Risorsa[]> {
    return this.http.get<Risorsa[]>(this.risorsaUrl).pipe(
      catchError(this.handleError<Risorsa[]>('getRisorse', []))
    )

  }






  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
