import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Risorsa } from 'src/app/model/risorsa';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-risorsa-edit',
  templateUrl: './risorsa-edit.component.html',
  styleUrls: ['./risorsa-edit.component.css']
})
export class RisorsaEditComponent implements OnInit {

  constructor(private risorsaService: RisorsaService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.risorsaService.getRisorsa(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(risorsa => this.risorsaEdit = risorsa);
  }

  risorsaEdit?: Risorsa;
  errorMessage: string = '';

  update(risorsaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.risorsaEdit));
    if (risorsaForm.valid) {
      if (this.risorsaEdit) {


        this.risorsaService.addRisorsa(this.risorsaEdit).subscribe({
          next: risorsaItem => this.risorsaEdit = risorsaItem,
          complete: () => this.router.navigate([`risorsa/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
        });
      }
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }
  onBack(): void {
    this.router.navigate(['/risorsa/list']);
  }
}
