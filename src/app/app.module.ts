import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AziendaCostoDescComponent } from './features/azienda/azienda-costo-desc/azienda-costo-desc.component';
import { AziendaDeleteComponent } from './features/azienda/azienda-delete/azienda-delete.component';
import { AziendaEditComponent } from './features/azienda/azienda-edit/azienda-edit.component';
import { AziendaInsertComponent } from './features/azienda/azienda-insert/azienda-insert.component';
import { AziendaListComponent } from './features/azienda/azienda-list/azienda-list.component';
import { AziendaShowComponent } from './features/azienda/azienda-show/azienda-show.component';
import { CommessaDeleteComponent } from './features/commessa/commessa-delete/commessa-delete.component';
import { CommessaEditComponent } from './features/commessa/commessa-edit/commessa-edit.component';
import { CommessaInsertComponent } from './features/commessa/commessa-insert/commessa-insert.component';
import { CommessaListComponent } from './features/commessa/commessa-list/commessa-list.component';
import { CommessaShowComponent } from './features/commessa/commessa-show/commessa-show.component';
import { RapportinoConRisorseComponent } from './features/rapportino/rapportino-con-risorse/rapportino-con-risorse.component';
import { RapportinoDeleteComponent } from './features/rapportino/rapportino-delete/rapportino-delete.component';
import { RapportinoEditComponent } from './features/rapportino/rapportino-edit/rapportino-edit.component';
import { RapportinoInsertComponent } from './features/rapportino/rapportino-insert/rapportino-insert.component';
import { RapportinoListComponent } from './features/rapportino/rapportino-list/rapportino-list.component';
import { RapportinoShowComponent } from './features/rapportino/rapportino-show/rapportino-show.component';
import { RisorsaConComesseComponent } from './features/risorsa/risorsa-con-comesse/risorsa-con-comesse.component';
import { RisorsaDeleteComponent } from './features/risorsa/risorsa-delete/risorsa-delete.component';
import { RisorsaEditComponent } from './features/risorsa/risorsa-edit/risorsa-edit.component';
import { RisorsaInsertComponent } from './features/risorsa/risorsa-insert/risorsa-insert.component';
import { RisorsaListComponent } from './features/risorsa/risorsa-list/risorsa-list.component';
import { RisorsaShowComponent } from './features/risorsa/risorsa-show/risorsa-show.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        WelcomeComponent,
        AziendaListComponent,
        AziendaShowComponent,
        AziendaInsertComponent,
        AziendaEditComponent,
        AziendaDeleteComponent,
        RisorsaListComponent,
        RisorsaShowComponent,
        RisorsaInsertComponent,
        RisorsaEditComponent,
        RisorsaDeleteComponent,
        CommessaListComponent,
        CommessaShowComponent,
        CommessaInsertComponent,
        CommessaDeleteComponent,
        CommessaEditComponent,
        RapportinoListComponent,
        RapportinoShowComponent,
        RapportinoInsertComponent,
        RapportinoEditComponent,
        RapportinoDeleteComponent,
        RapportinoConRisorseComponent,
        AziendaCostoDescComponent,
        RisorsaConComesseComponent,
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
