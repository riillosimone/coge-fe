import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Azienda } from 'src/app/model/azienda';
import { Commessa } from 'src/app/model/commessa';
import { AziendaService } from 'src/app/service/azienda/azienda.service';
import { CommessaService } from 'src/app/service/commessa/commessa.service';

@Component({
  selector: 'coge-commessa-edit',
  templateUrl: './commessa-edit.component.html',
  styleUrls: ['./commessa-edit.component.css']
})
export class CommessaEditComponent implements OnInit {

  commessa: Commessa = new Commessa();
  errorMessage: string = '';
  listaAziende?: Azienda[];
  commessaEdit?:Commessa;

  constructor(private commessaService: CommessaService,private aziendaService: AziendaService,  private router: Router, private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
   const id = this.activatedRoute.snapshot.paramMap.get('id');
   if(id){
    this.commessaService.getCommessa(+id).subscribe({
      next: commessa => {
        this.commessa = commessa;
      },
      error: err => this.errorMessage = err
    });
   }
   this.aziendaService.getAziende().subscribe({
    next: aziende => this.listaAziende = aziende
   });
  }

  update(commessaForm: NgForm): void {
    if (commessaForm.valid) {
      this.commessaService.updateCommessa(this.commessa).subscribe({
        complete: () => this.router.navigate([`commessa/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
    } else {
      this.errorMessage = 'Attenzione ! Operazione fallita! Il form non è stato validato';
    }
  }

  onBack(): void {
    this.router.navigate(['/commessa/list']);
  }

}
