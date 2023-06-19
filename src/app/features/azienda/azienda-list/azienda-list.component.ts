import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from 'src/app/service/azienda/azienda.service';

@Component({
  selector: 'coge-azienda-list',
  templateUrl: './azienda-list.component.html',
  styleUrls: ['./azienda-list.component.css']
})
export class AziendaListComponent implements OnInit{
  aziende?: Azienda[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private aziendaService: AziendaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.aziendaService.getAziende().subscribe(aziendeList => this.aziende = aziendeList);

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }


}
