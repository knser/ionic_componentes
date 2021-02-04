import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {

  dato:any[]=Array(20);
  @ViewChild(IonInfiniteScroll) infinitescroll:IonInfiniteScroll
  constructor() { }

  ngOnInit() {
  }
  loadData(event){
    if(this.dato.length>50){
      this.infinitescroll.complete;
      this.infinitescroll.disabled=true;
      return
    }
    console.log(event);
    setTimeout(()=>{
      const nuevodato:any[]=Array(20)
      this.dato.push(...nuevodato)
      event.target.complete()
    },2000);
  }

}
