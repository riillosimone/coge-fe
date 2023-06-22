import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commessa } from 'src/app/model/commessa';
import { CommessaService } from 'src/app/service/commessa/commessa.service';

@Component({
  selector: 'coge-commessa-edit',
  templateUrl: './commessa-edit.component.html',
  styleUrls: ['./commessa-edit.component.css']
})
export class CommessaEditComponent implements OnInit {

  constructor(private commessaService: CommessaService, private route: ActivatedRoute, private router: Router){ }


  ngOnInit(): void {
    this.commessaService.getCommessa(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(commessa => this.commessaEdit = commessa);
  }

  onBack():void{
    this.router.navigate(['/commessa/list']);
  }

  commessaEdit?:Commessa;

  errormessage: string = '';

  update(commessaForm: NgForm): void {
    console.log('sub' + JSON.stringify(this.commessaEdit));
    if(commessaForm.valid){
      if(this.commessaEdit){
        this.commessaService.insert(this.commessaEdit).subscribe({
          next: commessaItem => this.commessaEdit = commessaItem,
          complete: () => this.router.navigate([`commessa/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
        });}
      
    } else
    this.errormessage = 'Attenzione! Operazione fallita! il form non è stato validato';
  }


}
