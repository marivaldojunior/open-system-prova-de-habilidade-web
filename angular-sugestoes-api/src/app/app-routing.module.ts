import { DepartamentosComponent } from './departamentos/departamentos.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sugestoes', component: SugestoesComponent },
  { path: 'departamentos', component : DepartamentosComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
