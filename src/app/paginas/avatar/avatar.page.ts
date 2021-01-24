import { Component, OnInit } from '@angular/core';

interface avatar{
  icono:string;
  nombre:string;
}

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  avatar:avatar[]=[
    {
      icono:"assets/img/obito1.jpg",
      nombre:"obito1"
    },
    {
      icono:"assets/img/obito2.jpg",
      nombre:"obito2"
    },    
  ]

  constructor() { }

  ngOnInit() {
  }

}
