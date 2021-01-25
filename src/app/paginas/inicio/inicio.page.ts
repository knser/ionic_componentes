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
      icono: 'ellipsis-vertical-outline',
      nombre: 'Action Sheet',
      direccion: '/action-sheet'
    },
    {
      icono: 'chatbubble-outline',
      nombre: 'Alert',
      direccion: '/alert'
    },
    {
      icono: 'planet',
      nombre: 'Fab',
      direccion: '/fab'
    },
    {
      icono: 'calendar-outline',
      nombre: 'Datetime',
      direccion: '/datetime'
    },
    {
      icono: 'calculator-outline',
      nombre: 'Botones',
      direccion: '/buttons'
    },
    {
      icono: 'person-outline',
      nombre: 'Avatar',
      direccion: '/avatar'
    },
    {
      icono: 'layers-outline',
      nombre: 'Cards',
      direccion: '/cards'
    },
    {
      icono: 'person-add-outline',
      nombre: 'Item Sliding',
      direccion: '/item-sliding'
    },
    {
      icono: 'people-outline',
      nombre: 'Item Group',
      direccion: '/item-group'
    },
    {
      icono: 'person-remove-outline',
      nombre: 'Item Options',
      direccion: '/item-options'
    }    
  ]
  constructor() { }

  ngOnInit() {
  }

}
