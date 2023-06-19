import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { AziendaShowComponent } from './features/azienda/azienda-show/azienda-show.component';
import { AziendaInsertComponent } from './features/azienda/azienda-insert/azienda-insert.component';

const routes: Routes = [
  { path: 'azienda/list', component: AziendaListComponent },
  { path: 'azienda/list', component: AziendaListComponent },
  { path: 'azienda/insert', component: AziendaInsertComponent },

  { path: 'azienda/show/:id', component:AziendaShowComponent},
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
