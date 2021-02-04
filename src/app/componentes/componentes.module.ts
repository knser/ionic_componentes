import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { PopinfoComponent} from '../componentes/popinfo/popinfo.component';
import { PoverinfoComponent } from './poverinfo/poverinfo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopinfoComponent,
    PoverinfoComponent
  ],
  exports:[
    HeaderComponent,
    PopinfoComponent,
    PoverinfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
