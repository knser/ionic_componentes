import { Component, OnInit } from '@angular/core';

interface Componente{
  icono: string;
  nombre: string;
  direccion: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componente:Componente[]=[
    {
      icono: 'person',
      nombre: 'Action Sheet',
      direccion: '/action-sheet'
    },
    {
      icono: 'pricetag',
      nombre: 'Alert',
      direccion: '/alert'
    },
    {
      icono: 'planet',
      nombre: 'Fab',
      direccion: '/fab'
    },
    {
      icono: 'rocket-outline',
      nombre: 'Datetime',
      direccion: '/datetime'
    },
    {
      icono: 'albums-outline',
      nombre: 'Botones',
      direccion: '/buttons'
    },
    {
      icono: 'albums-outline',
      nombre: 'Avatar',
      direccion: '/avatar'
    },
    {
      icono: 'albums-outline',
      nombre: 'Cards',
      direccion: '/cards'
    }    
  ]
  constructor() { }

  ngOnInit() {
  }

}
