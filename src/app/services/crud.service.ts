import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'//pode ser provido,model, uma aplicacão toda
})
export class CrudService { // o http tem que ser iniciado em um constructor
  constructor(private http: HttpClient) { } //método é public, para que entenda que ele será
  public getFotos(): Observable<any> {     // acessado de outro lugar. O tipo de informação que vai ser retornado, é obsevable, o deve ser colocado o model;
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`);    
  }
}                                       
