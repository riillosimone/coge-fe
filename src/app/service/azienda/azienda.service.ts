import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Azienda } from 'src/app/model/azienda';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AziendaService {

  private aziendaUrl='http://localhost:8080/coge/api/azienda';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

   /** GET heroes from the server */
   getAziende(): Observable<Azienda[]> {
    return this.http.get<Azienda[]>(this.aziendaUrl).pipe(
      catchError(this.handleError<Azienda[]>('getAziende',[]))
    )
   
  }

  addAzienda(azienda: Azienda): Observable<Azienda> {
    return this.http.post<Azienda>(this.aziendaUrl, azienda, this.httpOptions);
  }

  /** GET hero by id. Will 404 if id not found */
  getAzienda(id: number): Observable<Azienda> {
    const url = `${this.aziendaUrl}/${id}`;
    return this.http.get<Azienda>(url).pipe(
      catchError(this.handleError<Azienda>(`getAzienda id=${id}`))
    );
  }



   /** DELETE: delete the hero from the server */
   deleteAzienda(id: number): Observable<any> {
    const url = `${this.aziendaUrl}/${id}`;

    return this.http.delete<Azienda>(url, this.httpOptions).pipe(
     
      catchError(this.handleError<Azienda>('deleteAzienda'))
    );
  }


   /** PUT: update the hero on the server */
   updateAzienda(azienda: Azienda): Observable<any> {
    return this.http.put(this.aziendaUrl, azienda, this.httpOptions).pipe(
     
      catchError(this.handleError<any>('updateAzienda'))
    );
  }


  getAziendeCostoDesc(): Observable<Azienda[]>{
    const url = `${this.aziendaUrl}/$aziendacostodesc`;
    return this.http.get<Azienda[]>(this.aziendaUrl).pipe(
      catchError(this.handleError<Azienda[]>('getAziende', []))
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
