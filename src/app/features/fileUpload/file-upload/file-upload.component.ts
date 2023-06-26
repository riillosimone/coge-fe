import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileUploadService } from 'src/app/service/fileUpload/file-upload.service';

@Component({
  selector: 'coge-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  constructor(private fileUploadService: FileUploadService, private http: HttpClient) { }
  selectedFile?: File;
  private attachmentUrl = 'http://localhost:8080/coge/api/attachment'

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // onFileSelected(event: any): void {
  //   const file: File = event.target.files[0];
  //   this.fileUploadService.uploadFile(file)
  //     .then(response => {
  //       console.log('File caricato con successo', response);
  //       // Esegui altre azioni dopo il caricamento del file
  //     })
  //     .catch(error => {
  //       console.error('Errore durante il caricamento del file', error);
  //     });
  // }

  uploadFile() {
    const formData = new FormData();
    if (this.selectedFile) {


      formData.append('file', this.selectedFile);

      this.http.post(this.attachmentUrl, formData).subscribe(
        (response) => {
          console.log('File caricato con successo', response);
          // Esegui eventuali azioni aggiuntive dopo il caricamento del file
        },
        (error) => {
          console.error('Errore durante il caricamento del file', error);
        }
      );
    }
  }
}
