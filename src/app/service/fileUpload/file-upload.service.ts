import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // constructor(private http: HttpClient) {}
  // private attachmentUrl = 'http://localhost:8080/coge/api/attachment'


  // upload(file: File): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();

  //   formData.append('file', file);

  //   const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }

  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/files`);
  // }
  // uploadFile(file: File): Promise<any> {
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   return this.http.post(this.attachmentUrl, formData).toPromise();
  // }
}
