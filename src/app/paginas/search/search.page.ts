import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  albums:any[]=[];

  busqueda:string='';

  constructor(private DataService:DataService) { }

  ngOnInit() {

    this.DataService.getAlbums().subscribe( albums =>{

      this.albums=albums;

      }
      
    )

  }
  

  onSearchChange(event){
    this.busqueda=event.detail.value;
  }

}
