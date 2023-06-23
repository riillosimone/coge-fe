import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Rapportino } from 'src/app/model/rapportino';
import { RapportinoService } from 'src/app/service/rapportino/rapportino.service';

@Component({
  selector: 'coge-rapportino-insert',
  templateUrl: './rapportino-insert.component.html',
  styleUrls: ['./rapportino-insert.component.css']
})
export class RapportinoInsertComponent {

  rapportino: Rapportino = new Rapportino();
  errorMessage: string = '';

  constructor(private rapportinoService: RapportinoService, private router: Router) {}
  
  ngOnInit():void {

  }

  save(rapportinoForm: NgForm): void{
    console.log('sub' + JSON.stringify(this.rapportino));
    if(rapportinoForm.valid) {
      this.rapportinoService.insertRapportino(this.rapportino).subscribe({
        next: rapportinoItem => this.rapportino = rapportinoItem,
        complete: () => this.router.navigate([`rapportino/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      });
      
    } else 
    this.errorMessage = 'Attenzione ! Operazione fallita! Il form non è stato validato';
  }

  onBack():void {
    this.router.navigate(['/rapportino/list']);
  }
}
