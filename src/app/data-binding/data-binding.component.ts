import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  numero: Number; // variavel
  constructor() {}
  ngOnInit(): void {}

  obtemNumero(numero: number) { //metodo
    this.numero = numero + 200; //this.numero: porque está referenciando numero,
  }                             //que é um atributo de uma classe

}
