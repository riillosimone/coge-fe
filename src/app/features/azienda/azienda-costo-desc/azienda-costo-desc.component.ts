import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from 'src/app/service/azienda/azienda.service';

@Component({
  selector: 'coge-azienda-costo-desc',
  templateUrl: './azienda-costo-desc.component.html',
  styleUrls: ['./azienda-costo-desc.component.css']
})
export class AziendaCostoDescComponent implements OnInit{
  aziende?: Azienda[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private aziendaService: AziendaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.aziendaService.getAziendeCostoDesc().subscribe(aziendeList => this.aziende = aziendeList);

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

}
