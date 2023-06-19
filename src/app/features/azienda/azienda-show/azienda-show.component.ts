import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from 'src/app/service/azienda/azienda.service';

@Component({
  selector: 'coge-azienda-show',
  templateUrl: './azienda-show.component.html',
  styleUrls: ['./azienda-show.component.css']
})
export class AziendaShowComponent implements OnInit{
  constructor(private aziendaService:AziendaService,private route: ActivatedRoute,private router: Router) {}

  aziendaDetail?:Azienda;


    ngOnInit(): void {
      this.aziendaService.getAzienda(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(azienda => this.aziendaDetail = azienda);
    }


    onBack():void {
      this.router.navigate(['/azienda/list']);
    }


}
