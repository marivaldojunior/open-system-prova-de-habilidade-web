import { Component, Input,  OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SugestoesApiService } from 'src/app/sugestoes-api.service';
import { DepartamentosApiService } from 'src/app/departamentos-api.service';

@Component({
  selector: 'app-add-edit-sugestoes',
  templateUrl: './add-edit-sugestoes.component.html',
  styleUrls: ['./add-edit-sugestoes.component.css']
})
export class AddEditSugestoesComponent implements OnInit {

  sugestaoList$!: Observable<any[]>;
  departamentoList$! : Observable<any[]>;


  constructor(private serviceS : SugestoesApiService, private serviceD : DepartamentosApiService) { 

  }
  @Input() sugestao:any;
  id : number = 0
  nomeColaborador : string = "";
  comentario : string = "";
  departamentoId! : number;
  justificativa : string = "";

  ngOnInit(): void {
    this.id = this.sugestao.id;
    this.nomeColaborador = this.sugestao.nomeColaborador;
    this.comentario = this.sugestao.comentario;
    this.departamentoId = this.sugestao.departamentoId;
    this.justificativa = this.sugestao.justificativa;
    this.sugestaoList$ = this.serviceS.getSugestaoList();
    this.departamentoList$ = this.serviceD.getDepartamentoList();

  }
  addSugestao(){

  }
  updateSugestao(){
    
  }

}
