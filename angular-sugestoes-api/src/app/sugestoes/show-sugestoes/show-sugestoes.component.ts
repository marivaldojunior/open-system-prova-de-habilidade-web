import { DepartamentosApiService } from './../../departamentos-api.service';
import { SugestoesApiService } from './../../sugestoes-api.service';
import { Observable } from 'rxjs';
import { AbstractType, Component, OnInit } from '@angular/core';

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
    this.refreshDepartamentoMap();
  }
  //variaveis (props)
  modalTitle:string = '';
  activateAddEditSugestoesComponent:boolean = false;
  sugestao:any;

  modalAdd(){
    this.sugestao = {
      id : 0,
      nomeColaborador : null,
      comentario : null,
      departamentoId : null,
      justificativa : null
    };
    this.modalTitle = "Nova Sugestão";
    this.activateAddEditSugestoesComponent = true;
  }
  modalEdit(item:any){
    this.sugestao = item;
    this.modalTitle = "Edição de Sugestão";
    this.activateAddEditSugestoesComponent = true;
  }
  delete(item:any){
    if(confirm(`Você tem certeza que quer deletar a Tarefa ${item.id}?`)){
        var id : number = item.id;
        this.serviceS.deleteSugestao(id).subscribe(res =>{
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }
        var showDeleteSuccess = document.getElementById('update-success-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(function(){
          if(showDeleteSuccess){
          showDeleteSuccess.style.display ='none';
          }
        },4000);
      });
    }
  }
  modalClose(){
    this.activateAddEditSugestoesComponent = false;
    this.sugestaoList$ = this.serviceS.getSugestaoList();
  }

  refreshDepartamentoMap(){
    this.serviceD.getDepartamentoList().subscribe(data =>{
      this.departamentoList = data;

      for(let i =0; i < data.length; i++){
        this.departamentosMap.set(this.departamentoList[i].id,this.departamentoList[i].sigra + " - " + this.departamentoList[i].nome)
      }
    })
  }

}
