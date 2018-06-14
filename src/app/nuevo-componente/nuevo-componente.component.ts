import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {

	miVariable : number = 35;


  constructor() { }

  ngOnInit() {
  	this.miVariable = 52;
  }

  nuevoClick(){
  	this.miVariable = 22;
  }
}
