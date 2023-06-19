import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from 'src/app/service/azienda/azienda.service';

@Component({
  selector: 'coge-azienda-insert',
  templateUrl: './azienda-insert.component.html',
  styleUrls: ['./azienda-insert.component.css']
})
export class AziendaInsertComponent {
  azienda: Azienda = new Azienda();
  errorMessage: string = '';

  constructor(private aziendaService: AziendaService, private router: Router) { }

  ngOnInit(): void {
  }

  save(aziendaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.azienda));
    if (aziendaForm.valid) {
      this.aziendaService.addAzienda(this.azienda).subscribe({
        next: aziendaItem => this.azienda = aziendaItem,
        complete: () => this.router.navigate([`azienda/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

  onBack():void {
    this.router.navigate(['/azienda/list']);
  }




}
