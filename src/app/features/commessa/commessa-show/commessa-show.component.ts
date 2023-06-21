import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commessa } from 'src/app/model/commessa';
import { CommessaService } from 'src/app/service/commessa/commessa.service';

@Component({
  selector: 'coge-commessa-show',
  templateUrl: './commessa-show.component.html',
  styleUrls: ['./commessa-show.component.css']
})
export class CommessaShowComponent implements OnInit {
  constructor(private commessaService:CommessaService,private route: ActivatedRoute, private router: Router ){}


  commessaDetail?:Commessa;

  ngOnInit(): void {
    this.commessaService.getCommessa(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe(commessa => this.commessaDetail = commessa);

  }

  
  onBack():void {
    this.router.navigate(['/commessa/list']);
  }

}
