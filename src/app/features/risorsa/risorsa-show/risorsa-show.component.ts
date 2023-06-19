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

  constructor(private risorsaService: RisorsaService, private route: ActivatedRoute, private router: Router) { }

  risorsaDetail?: Risorsa;
  onBack(): void {
    this.router.navigate(['/risorsa/list']);
  }
}
