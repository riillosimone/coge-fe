import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { Azienda } from 'src/app/model/azienda';
import { Commessa } from 'src/app/model/commessa';
import { AziendaService } from 'src/app/service/azienda/azienda.service';
import { CommessaService } from 'src/app/service/commessa/commessa.service';

@Component({
  selector: 'coge-commessa-insert',
  templateUrl: './commessa-insert.component.html',
  styleUrls: ['./commessa-insert.component.css']
})
export class CommessaInsertComponent implements OnInit{
  commessa: Commessa = new Commessa();
  errorMessage: string = '';

  searchText?: string;
  searchResults: string[] = [];

  listaaziende?: Azienda[];
  idAzienda?:number;
  constructor(private commessaService: CommessaService, private router: Router, private aziendaService: AziendaService,private http: HttpClient) { }


  onConferma() {
    this.aziendaService.getAzienda(Number(this.idAzienda))
      .subscribe(azienda => this.commessa.azienda = azienda);
  }

  ngOnInit(): void {
    this.aziendaService.getAziende().subscribe(aziendeList => this.listaaziende = aziendeList);
  }

  save(commessaForm: NgForm): void {
    console.log('sub' + JSON.stringify(this.commessa));
    if (commessaForm.valid) {
      this.commessaService.insert(this.commessa).subscribe({
        next: commessaItem => this.commessa = commessaItem,
        complete: () => this.router.navigate([`commessa/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });

    } else
      this.errorMessage = 'Attenzione ! Operazione fallita! Il form non è stato validato';
  }

  onBack(): void {
    this.router.navigate(['/commessa/list']);
  }

  
}
