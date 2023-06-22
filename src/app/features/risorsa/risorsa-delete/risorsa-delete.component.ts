import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-risorsa-delete',
  templateUrl: './risorsa-delete.component.html',
  styleUrls: ['./risorsa-delete.component.css']
})
export class RisorsaDeleteComponent implements OnInit{

  constructor(private risorsaService: RisorsaService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.risorsaService.getRisorsa(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(risorsa => this.risorsaDelete = risorsa);  }

    risorsaDelete?: Risorsa;
    errorMessage: string = '';

    onBack(): void {
      this.router.navigate(['/risorsa/list']);
    }
  
    onConfermaDelete() {
      if (this.risorsaDelete?.id) {
        this.risorsaService.deleteRisorsa(this.risorsaDelete.id).subscribe();
      }
      this.router.navigate(['risorsa/list']);
    }
}
