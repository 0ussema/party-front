import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Salle} from '../interface/salle';

@Injectable({
  providedIn: 'root'
})
export class SallesService {
  public host:string="http://localhost:8881"

  constructor(private http: HttpClient) { }

  getAllSalles():Observable<Salle[]>{
    return this.http.get<Salle[]>(this.host+"/salles");
  }
}
