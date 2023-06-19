import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Azienda } from 'src/app/model/azienda';
import { AziendaService } from 'src/app/service/azienda/azienda.service';

@Component({
  selector: 'coge-azienda-delete',
  templateUrl: './azienda-delete.component.html',
  styleUrls: ['./azienda-delete.component.css']
})
export class AziendaDeleteComponent implements OnInit{
  constructor(private aziendaService: AziendaService, private route: ActivatedRoute, private router: Router) { }

  aziendaDelete?: Azienda;

  ngOnInit(): void {
    this.aziendaService.getAzienda(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(azienda => this.aziendaDelete = azienda);
  }


  onBack(): void {
    this.router.navigate(['/azienda/list']);
  }

  onConfermaDelete() {
    if (this.aziendaDelete?.id) {
      this.aziendaService.deleteAzienda(this.aziendaDelete.id).subscribe();
    }
    this.router.navigate(['azienda/list']);
  }



}
