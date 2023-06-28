import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Commessa } from 'src/app/model/commessa';
import { Risorsa } from 'src/app/model/risorsa';
import { CommessaService } from 'src/app/service/commessa/commessa.service';
import { RisorsaService } from 'src/app/service/risorsa/risorsa.service';

@Component({
  selector: 'coge-aggiungi-commesse',
  templateUrl: './aggiungi-commesse.component.html',
  styleUrls: ['./aggiungi-commesse.component.css']
})
export class AggiungiCommesseComponent implements OnInit {

  @Output() editNotify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private risorsaService: RisorsaService, private commessaService: CommessaService, private route: ActivatedRoute, private router: Router) { }

  @Input() risorsaCaricata?:Risorsa;
  listaCommesse?: Commessa[];
  sub?: Subscription;
  selectedItems: any[] = [];

  ngOnInit(): void {
    // this.risorsaService.getRisorsa(this.risorsaCaricata!.id!)
    //   .subscribe(risorsa => this.risorsaCaricata = risorsa);
    this.sub = this.commessaService.listAll().subscribe(commesseList => this.listaCommesse = commesseList);
  }

  onAggiungiCommesse(): void {
    this.risorsaService.updateRisorsa(this.risorsaCaricata!).subscribe({
      next: risorsaItem => this.risorsaCaricata = risorsaItem
      // complete: () => this.router.navigate([`risorsa/show/${this.risorsaCaricata!.id}`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
    });
    this.editNotify.emit(false);
  }


}
