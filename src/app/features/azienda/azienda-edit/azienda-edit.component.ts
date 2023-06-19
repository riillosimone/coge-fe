import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from 'src/app/service/azienda/azienda.service';

@Component({
  selector: 'coge-azienda-edit',
  templateUrl: './azienda-edit.component.html',
  styleUrls: ['./azienda-edit.component.css']
})
export class AziendaEditComponent implements OnInit {
  constructor(private aziendaService: AziendaService, private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.aziendaService.getAzienda(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(azienda => this.aziendaEdit = azienda);
  }
  onBack(): void {
    this.router.navigate(['/azienda/list']);
  }
  aziendaEdit?:Azienda;

  errorMessage: string = '';

  update(aziendaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.aziendaEdit));
    if (aziendaForm.valid) {
      if (this.aziendaEdit) {
        
      
      this.aziendaService.addAzienda(this.aziendaEdit).subscribe({
        next: aziendaItem => this.aziendaEdit = aziendaItem,
        complete: () => this.router.navigate([`azienda/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });}
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }



}
