import { Component, Input,  OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartamentosApiService } from 'src/app/departamentos-api.service';

@Component({
  selector: 'app-add-edit-departamentos',
  templateUrl: './add-edit-departamentos.component.html',
  styleUrls: ['./add-edit-departamentos.component.css']
})
export class AddEditDepartamentosComponent implements OnInit {

  departamentoList$! : Observable<any[]>;
  constructor(private service : DepartamentosApiService) { }

  @Input() departamento:any;
  id : number = 0
  nome : string = "";
  sigla : string = "";

  ngOnInit(): void {
    this.id = this.departamento.id;
    this.nome = this.departamento.nome;
    this.sigla = this.departamento.sigla;
    this.departamentoList$ = this.service.getDepartamentoList();
  }
  addDepartamento(){
    var departamento = {
      nome : this.nome,
      sigra : this.sigla
    }
    this.service.addDepartamento(departamento).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showAddSucess = document.getElementById('add-success-alert');
      if(showAddSucess){
        showAddSucess.style.display = 'block';
      }
      setTimeout(function(){
        if(showAddSucess){
          showAddSucess.style.display ='none';
        }
      },4000);
    });

  }
  updateDepartamento(){
    var departamento = {
      id : this.id,
      nome : this.nome,
      sigra : this.sigla
    }
    var id : number = this.id;
    this.service.updateDepartamento(id,departamento).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display ='none';
        }
      },4000);
    });

  }
}
