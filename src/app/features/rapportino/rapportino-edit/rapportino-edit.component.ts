import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rapportino } from 'src/app/model/rapportino';
import { RapportinoService } from 'src/app/service/rapportino/rapportino.service';

@Component({
  selector: 'coge-rapportino-edit',
  templateUrl: './rapportino-edit.component.html',
  styleUrls: ['./rapportino-edit.component.css']
})
export class RapportinoEditComponent implements OnInit {


 constructor(private rapportinoService: RapportinoService, private route: ActivatedRoute, private router: Router){ }
 

  ngOnInit(): void {
    this.rapportinoService.getRapportino(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(rapportino => this.rapportinoEdit = rapportino);
  }

  onBack(): void{
    this.router.navigate(['/rapportino/list']);
  }

  rapportinoEdit?:Rapportino;

  errorMessage: string = '';

  update(rapportinoForm: NgForm): void{
    console.log('sub' + JSON.stringify(this.rapportinoEdit));
    if(rapportinoForm.valid){
      if(this.rapportinoEdit){
        this.rapportinoService.insertRapportino(this.rapportinoEdit).subscribe({
          next: rapportinoItem => this.rapportinoEdit = rapportinoItem,
          complete: () => this.router.navigate([`rapportino/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.'}})
          
        });}

      } else
       this.errorMessage = 'Attenzione! Operazione fallita! il form non è stato validato';
      }
    }
  


