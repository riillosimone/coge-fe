import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { AziendaShowComponent } from './features/azienda/azienda-show/azienda-show.component';
import { AziendaInsertComponent } from './features/azienda/azienda-insert/azienda-insert.component';
import { AziendaEditComponent } from './features/azienda/azienda-edit/azienda-edit.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { AziendaDeleteComponent } from './features/azienda/azienda-delete/azienda-delete.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaShowComponent } from './features/commessa/commessa-show/commessa-show.component';
import { CommessaInsertComponent } from './features/commessa/commessa-insert/commessa-insert.component';
<<<<<<< Updated upstream
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { RisorsaShowComponent } from './features/risorsa/risorsa-show/risorsa-show.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { RisorsaDeleteComponent } from './features/risorsa/risorsa-delete/risorsa-delete.component';
import { AziendaCostoDescComponent } from './features/azienda/azienda-costo-desc/azienda-costo-desc.component';
import { RisorsaConComesseComponent } from './features/risorsa/risorsa-con-comesse/risorsa-con-comesse.component';
import { RapportinoListComponent } from './features/rapportino/rapportino-list/rapportino-list.component';
import { RapportinoShowComponent } from './features/rapportino/rapportino-show/rapportino-show.component';
import { RapportinoInsertComponent } from './features/rapportino/rapportino-insert/rapportino-insert.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { RapportinoEditComponent } from './features/rapportino/rapportino-edit/rapportino-edit.component';
import { RapportinoDeleteComponent } from './features/rapportino/rapportino-delete/rapportino-delete.component';
=======
import { RisorsaShowComponent } from './features/risorsa/risorsa-show/risorsa-show.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaDeleteComponent } from './features/risorsa/risorsa-delete/risorsa-delete.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: 'azienda/list', component: AziendaListComponent },
  { path: 'azienda/insert', component: AziendaInsertComponent },
  { path: 'azienda/edit/:id', component:AziendaEditComponent},
  { path: 'azienda/show/:id', component:AziendaShowComponent},
  { path: 'azienda/delete/:id', component:AziendaDeleteComponent},
  { path: 'commessa/list', component: CommessaListComponent },
  { path: 'commessa/show/:id', component:CommessaShowComponent},
  { path: 'commessa/insert', component: CommessaInsertComponent},
<<<<<<< Updated upstream
  { path: 'commessa/edit/:id', component: CommessaEditComponent},
  { path: 'commessa/delete/:id', component: CommessaDeleteComponent},
  { path: 'rapportino/list', component: RapportinoListComponent },
  { path: 'rapportino/show/:id', component:RapportinoShowComponent},
  { path: 'rapportino/insert', component: RapportinoInsertComponent},
  { path: 'rapportino/edit/:id', component: RapportinoEditComponent},
  { path: 'rapportino/delete/:id', component: RapportinoDeleteComponent},
  { path: 'risorsa/show/:id', component: RisorsaShowComponent },
  { path: 'risorsa/edit/:id', component: RisorsaEditComponent },
  { path: 'risorsa/insert', component: RisorsaInsertComponent },
  { path: 'azienda/listacostodesc', component:AziendaCostoDescComponent},
  { path: 'risorsa/riepilogoconcommesse', component:RisorsaConComesseComponent},
  { path: 'risorsa/list', component: RisorsaListComponent },
=======
  { path: 'risorsa/list', component: RisorsaListComponent },
  { path: 'risorsa/insert', component: RisorsaInsertComponent },
  { path: 'risorsa/edit/:id', component: RisorsaEditComponent },
  { path: 'risorsa/show/:id', component: RisorsaShowComponent },
>>>>>>> Stashed changes
  { path: 'risorsa/delete/:id', component:RisorsaDeleteComponent},
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
