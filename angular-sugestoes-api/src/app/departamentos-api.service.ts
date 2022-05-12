import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosApiService {
  readonly departamentosAPIUrl = "https://localhost:7233/api";
  constructor(private http: HttpClient) { }
  getDepartamentoList():Observable<any[]>{
    return this.http.get<any>(this.departamentosAPIUrl + '/Departamentoes')
  }
}
