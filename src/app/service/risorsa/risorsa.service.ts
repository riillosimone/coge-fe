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

  /** GET hero by id. Will 404 if id not found */
  getRisorsa(id: number): Observable<Risorsa> {
    const url = `${this.risorsaUrl}/${id}`;
    return this.http.get<Risorsa>(url).pipe(
      catchError(this.handleError<Risorsa>(`getRisorsa id=${id}`))
    );
  }

  addRisorsa(risorsa: Risorsa): Observable<Risorsa> {
    return this.http.post<Risorsa>(this.risorsaUrl, risorsa, this.httpOptions);
  }

   /** DELETE: delete the hero from the server */
   deleteRisorsa(id: number): Observable<any> {
    const url = `${this.risorsaUrl}/delete/${id}`;

    return this.http.delete<Risorsa>(url, this.httpOptions).pipe(
     
      catchError(this.handleError<Risorsa>('deleteRisorsa'))
    );
  }


   /** PUT: update the hero on the server */
   updateRisorsa(risorsa: Risorsa): Observable<any> {
    const url = `${this.risorsaUrl}/edit`;
    return this.http.put(url, risorsa, this.httpOptions).pipe(
     
      catchError(this.handleError<any>('updateRisorsa'))
    );
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
