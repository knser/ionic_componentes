import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoverPageRoutingModule } from './pover-routing.module';

import { PoverPage } from './pover.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoverPageRoutingModule,
    ComponentesModule
  ],
  declarations: [PoverPage]
})
export class PoverPageModule {}
