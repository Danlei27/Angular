import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-for',
  templateUrl: './ngif-for.component.html',
  styleUrls: ['./ngif-for.component.css']
})
export class NgifForComponent implements OnInit {
  numero: number = 1;
  arrNumeros = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }
  ngOnInit(): void {
  }

}
