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
import { RisorsaShowComponent } from './features/risorsa/risorsa-show/risorsa-show.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';

const routes: Routes = [
  { path: 'azienda/list', component: AziendaListComponent },
  { path: 'azienda/insert', component: AziendaInsertComponent },
  { path: 'azienda/edit/:id', component:AziendaEditComponent},
  { path: 'azienda/show/:id', component:AziendaShowComponent},
  { path: 'azienda/delete/:id', component:AziendaDeleteComponent},
  { path: 'commessa/list', component: CommessaListComponent },
  { path: 'commessa/show/:id', component:CommessaShowComponent},
  { path: 'commessa/insert', component: CommessaInsertComponent},
  { path: 'commessa/edit/:id', component: CommessaInsertComponent},
  { path: 'commessa/delete/:id', component: CommessaDeleteComponent},
  { path: 'risorsa/show/:id', component: RisorsaShowComponent },
  { path: 'risorsa/edit/:id', component: RisorsaEditComponent },
  { path: 'risorsa/insert', component: RisorsaInsertComponent },
  { path: 'risorsa/list', component: RisorsaListComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
