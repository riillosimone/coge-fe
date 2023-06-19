import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-risorsa-insert',
  templateUrl: './risorsa-insert.component.html',
  styleUrls: ['./risorsa-insert.component.css']
})
export class RisorsaInsertComponent {

  risorsa: Risorsa = new Risorsa();

  errorMessage: string = '';

  constructor(private risorsaService: RisorsaService, private router: Router) { }

  save(risorsaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.risorsa));
    if (risorsaForm.valid) {
      this.risorsaService.addRisorsa(this.risorsa).subscribe({
        next: risorsaItem => this.risorsa = risorsaItem,
        complete: () => this.router.navigate([`risorsa/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

  onBack(): void {
    this.router.navigate(['/risorsa/list']);
  }

}
