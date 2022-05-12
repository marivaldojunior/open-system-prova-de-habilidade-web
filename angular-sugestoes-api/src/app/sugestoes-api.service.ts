import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugestoesApiService {
  readonly sugestoesAPIUrl = "https://localhost:7233/api"; 

  constructor(private http: HttpClient) { }

  getSugestaoList():Observable<any[]>{
    return this.http.get<any>(this.sugestoesAPIUrl + '/sugestaos');
  }

  addSugestao(data:any){
    return this.http.post(this.sugestoesAPIUrl + '/sugestaos', data);
  }
  updateSugestao(id:number|string, data:any){
    return this.http.put(this.sugestoesAPIUrl + `/sugestaos/${id}`, data);
  }
  deleteSugestao(id:number|string){
    this.http.delete(this.sugestoesAPIUrl + `/sugestaos/${id}`);
  }
}
