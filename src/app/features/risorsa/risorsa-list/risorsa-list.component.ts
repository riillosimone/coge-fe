import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-risorsa-list',
  templateUrl: './risorsa-list.component.html',
  styleUrls: ['./risorsa-list.component.css']
})
export class RisorsaListComponent implements OnInit{

  risorse?:Risorsa[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private risorsaService: RisorsaService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.sub = this.risorsaService.getRisorse().subscribe(risorseList => this.risorse = risorseList);

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });

  }

}
