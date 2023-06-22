import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AziendaShowComponent } from './features/azienda/azienda-show/azienda-show.component';
import { AziendaInsertComponent } from './features/azienda/azienda-insert/azienda-insert.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { AziendaEditComponent } from './features/azienda/azienda-edit/azienda-edit.component';
import { AziendaDeleteComponent } from './features/azienda/azienda-delete/azienda-delete.component';
<<<<<<< Updated upstream
import { RisorsaShowComponent } from './features/risorsa/risorsa-show/risorsa-show.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaShowComponent } from './features/commessa/commessa-show/commessa-show.component';
import { CommessaInsertComponent } from './features/commessa/commessa-insert/commessa-insert.component';
<<<<<<< HEAD
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { RapportinoListComponent } from './features/rapportino/rapportino-list/rapportino-list.component';
import { RapportinoShowComponent } from './features/rapportino/rapportino-show/rapportino-show.component';
import { RapportinoInsertComponent } from './features/rapportino/rapportino-insert/rapportino-insert.component';
import { RapportinoEditComponent } from './features/rapportino/rapportino-edit/rapportino-edit.component';
import { RapportinoDeleteComponent } from './features/rapportino/rapportino-delete/rapportino-delete.component';
=======
=======
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaShowComponent } from './features/risorsa/risorsa-show/risorsa-show.component';
import { RisorsaDeleteComponent } from './features/risorsa/risorsa-delete/risorsa-delete.component';
>>>>>>> Stashed changes
>>>>>>> a6f54ae55207e42c6d4c770a772b4b92eaec9239

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    AziendaListComponent,
    AziendaShowComponent,
    AziendaInsertComponent,
    RisorsaListComponent,
<<<<<<< Updated upstream
    AziendaInsertComponent,
    AziendaEditComponent,
    AziendaDeleteComponent,
    RisorsaShowComponent,
    RisorsaInsertComponent,
    RisorsaEditComponent,
    AziendaDeleteComponent,
    CommessaListComponent,
    CommessaShowComponent,
<<<<<<< HEAD
    CommessaInsertComponent,
    CommessaDeleteComponent,
    CommessaEditComponent,
    RapportinoListComponent,
    RapportinoShowComponent,
    RapportinoInsertComponent,
    RapportinoEditComponent,
    RapportinoDeleteComponent
    
=======
    CommessaInsertComponent
=======
    RisorsaEditComponent,
    RisorsaInsertComponent,
    RisorsaShowComponent,
    AziendaInsertComponent,
    AziendaEditComponent,
    AziendaDeleteComponent,
    RisorsaDeleteComponent
>>>>>>> Stashed changes
>>>>>>> a6f54ae55207e42c6d4c770a772b4b92eaec9239
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
