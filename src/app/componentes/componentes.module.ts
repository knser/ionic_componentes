import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { PopinfoComponent} from '../componentes/popinfo/popinfo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopinfoComponent
  ],
  exports:[
    HeaderComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
