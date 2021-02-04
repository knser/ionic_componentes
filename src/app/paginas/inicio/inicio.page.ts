import { Component, OnInit } from '@angular/core';

import { DataService } from '../../service/data.service';

import { Observable } from 'rxjs';

import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private DataService:DataService) { }
  componente:Observable<Componente[]>;
  ngOnInit() {
    this.componente=this.DataService.getMenu();
  }

}
