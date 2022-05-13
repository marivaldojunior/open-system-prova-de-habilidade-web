import { DepartamentosApiService } from './../../departamentos-api.service';
import { SugestoesApiService } from './../../sugestoes-api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-sugestoes',
  templateUrl: './show-sugestoes.component.html',
  styleUrls: ['./show-sugestoes.component.css']
})
export class ShowSugestoesComponent implements OnInit {

  sugestaoList$!: Observable<any[]>;
  departamentoList$!: Observable<any[]>;
  departamentoList:any=[];
  //map para mostrar associação entre as tabelas(FK)
  departamentosMap:Map<number,string> = new Map();

  constructor(private serviceS : SugestoesApiService, private serviceD : DepartamentosApiService) { }

  ngOnInit(): void {
    this.sugestaoList$ = this.serviceS.getSugestaoList();
    this.departamentoList$ = this.serviceD.getDepartamentoList();
  }


}
