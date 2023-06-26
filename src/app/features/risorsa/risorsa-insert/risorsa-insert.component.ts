import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Attachment } from 'src/app/model/attachment';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-risorsa-insert',
  templateUrl: './risorsa-insert.component.html',
  styleUrls: ['./risorsa-insert.component.css']
})
export class RisorsaInsertComponent {

  risorsa: Risorsa = {
    id: undefined,
    nome: '',
    cognome: '',
    dataIn: new Date(),
    dataOut: new Date(),
    cf: '',
    email: '',
    costoGiornaliero: 0,
    cv: {
      id: undefined,
      fileName: '',
      contentType: '',
      descrizione: '',
      dataCreazione: new Date(),
      payload: [],
    },
  };
  // selectedFile?:File;
  errorMessage: string = '';

  constructor(private risorsaService: RisorsaService, private router: Router, private http:HttpClient) { }

  save(risorsaForm: NgForm): void {
    if (risorsaForm.valid) {
      // this.risorsaNew.cv=this.cv
      console.log(this.risorsa)
      this.risorsaService.addRisorsa(this.risorsa).subscribe({
        next: (risorsaItem) => (this.risorsa = risorsaItem),
        complete: () =>
          this.router.navigate([`risorsa/list`], {
            queryParams: {
              confirmMessage: 'Operazione effettuata correttamente.',
            },
          }),
      });
    } else
      this.errorMessage =
        'Attenzione! Operazione fallita! Il form non è stato validato';
  }


  handleCVFile(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const payload: Uint8Array = new Uint8Array(fileReader.result as ArrayBuffer);
        const attachment: Attachment = {
          id: undefined,
          fileName: files[0].name,
          contentType: files[0].type,
          descrizione: 'tipo1',
          dataCreazione: new Date(),
          payload: Array.from(payload) // Converti Uint8Array in un array di numeri
        };
        this.risorsa.cv = attachment;
        
      };
      fileReader.readAsArrayBuffer(files[0]);
    }
  }
  


  onBack(): void {
    this.router.navigate(['/risorsa/list']);
  }

}
