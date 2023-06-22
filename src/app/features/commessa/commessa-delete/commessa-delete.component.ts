import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commessa } from 'src/app/model/commessa';
import { CommessaService } from 'src/app/service/commessa/commessa.service';

@Component({
  selector: 'coge-commessa-delete',
  templateUrl: './commessa-delete.component.html',
  styleUrls: ['./commessa-delete.component.css']
})
export class CommessaDeleteComponent implements OnInit {

    constructor(private commessaService: CommessaService,private route: ActivatedRoute, private router: Router) { }

    commessaDelete?: Commessa;



  ngOnInit(): void {
    this.commessaService.getCommessa(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(commessa => this.commessaDelete = commessa);
  }


  onBack(): void{
    this.router.navigate(['/commessa/list']);
  }

  onConfermaDelete(){
    if(this.commessaDelete?.id){
      this.commessaService.deleteCommessa(this.commessaDelete.id).subscribe();
    }
    this.router.navigate(['commessa/list']);
  }

}
