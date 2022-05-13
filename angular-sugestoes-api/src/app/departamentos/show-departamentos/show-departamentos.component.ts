import { DepartamentosApiService } from './../../departamentos-api.service';
import { Observable } from 'rxjs';
import { AbstractType, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-departamentos',
  templateUrl: './show-departamentos.component.html',
  styleUrls: ['./show-departamentos.component.css']
})
export class ShowDepartamentosComponent implements OnInit {

  departamentoList$!: Observable<any[]>;
  departamentoList:any=[];

  constructor(private service : DepartamentosApiService) { }

  ngOnInit(): void {
    this.departamentoList$ = this.service.getDepartamentoList();
  }

  modalTitle: string = '';
  activateAddEditDepartamentoComponent:boolean = false;
  departamento:any;

  modalAdd(){
    this.departamento = {
      id : 0,
      nome : null,
      sigra : null
    };
    this.modalTitle = "Nova Sugestão";
    this.activateAddEditDepartamentoComponent = true;
  }
  modalEdit(item:any){
    this.departamento = item;
    this.modalTitle = "Edição de Sugestão";
    this.activateAddEditDepartamentoComponent = true;
  }
  delete(item:any){
    if(confirm(`Você tem certeza que quer deletar o departamento ${item.id}?`)){
        var id : number = item.id;
        this.service.deleteDepartamento(id).subscribe(res =>{
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
    this.activateAddEditDepartamentoComponent = false;
    this.departamentoList$ = this.service.getDepartamentoList();
  }
}

