import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-risorsa-show',
  templateUrl: './risorsa-show.component.html',
  styleUrls: ['./risorsa-show.component.css']
})
export class RisorsaShowComponent implements OnInit {

  ngOnInit(): void {
    this.risorsaService.getRisorsa(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(risorsa => this.risorsaDetail = risorsa);
  }

  constructor(private risorsaService: RisorsaService, private route: ActivatedRoute, private router: Router, private http:HttpClient) { }

  risorsaDetail?: Risorsa;
  onBack(): void {
    this.router.navigate(['/risorsa/list']);
  }

  base64ToArrayBuffer(base64: string) {
    const binaryString = window.atob(base64); // Comment this if not using base64
    const bytes = new Uint8Array(binaryString.length);
    return bytes.map((byte, i) => binaryString.charCodeAt(i));
  }

  createAndDownloadBlobFile(body:any, filename:any) {
    const blob = new Blob([body]);
    const fileName = `${filename}`;
    
      const link = document.createElement('a');
      link.setAttribute('target',"_blank");
      // Browsers that support HTML5 download attribute
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  }

  downloadPdf(id: number) {
    const url = 'http://localhost:8080/coge/api/attachment';
    const attachmentUrl = `${url}/${this.risorsaDetail?.cv?.id}`;
    this.http.get(attachmentUrl)
      .subscribe(
        (base64Pdf: any) => {
          
          const arrayBuffer = this.base64ToArrayBuffer(base64Pdf.payload);
          this.createAndDownloadBlobFile(arrayBuffer, 'testName');
        },
        error => console.error(error)
      )
  }
}
