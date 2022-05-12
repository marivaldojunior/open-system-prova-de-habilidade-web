import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { ShowSugestoesComponent } from './sugestoes/show-sugestoes/show-sugestoes.component';
import { AddEditSugestoesComponent } from './sugestoes/add-edit-sugestoes/add-edit-sugestoes.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { ShowDepartamentosComponent } from './departamentos/show-departamentos/show-departamentos.component';
import { AddEditDepartamentosComponent } from './departamentos/add-edit-departamentos/add-edit-departamentos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SugestoesComponent,
    ShowSugestoesComponent,
    AddEditSugestoesComponent,
    DepartamentosComponent,
    ShowDepartamentosComponent,
    AddEditDepartamentosComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
