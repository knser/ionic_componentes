import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/Opciones',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'Cuenta',
        loadChildren:()=> import ('../avatar/avatar.module').then(m=>m.AvatarPageModule)
      },
      {
        path:'Contactos',
        loadChildren:()=> import ('../cards/cards.module').then(m=>m.CardsPageModule)
      },
      {
        path:'Opciones',
        loadChildren:()=> import ('../list-reorder/list-reorder.module').then(m=>m.ListReorderPageModule)
      }     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
