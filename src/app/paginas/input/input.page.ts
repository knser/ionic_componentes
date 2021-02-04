import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Componente } from '../../interfaces/interfaces';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre:any="";
  usuario={
    nombre:"",
    password:"",
  }
  
  constructor() { }

  ngOnInit() {
    console.log(this.nombre);
  }

  onSubmit(myform){
    console.log(this.usuario)
  }

  

}
