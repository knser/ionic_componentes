import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./paginas/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./paginas/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./paginas/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./paginas/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./paginas/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./paginas/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./paginas/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'item-sliding',
    loadChildren: () => import('./paginas/item-sliding/item-sliding.module').then( m => m.ItemSlidingPageModule)
  },
  {
    path: 'item-group',
    loadChildren: () => import('./paginas/item-group/item-group.module').then( m => m.ItemGroupPageModule)
  },
  {
    path: 'item-options',
    loadChildren: () => import('./paginas/item-options/item-options.module').then( m => m.ItemOptionsPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./paginas/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./paginas/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./paginas/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./paginas/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./paginas/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'scroll',
    loadChildren: () => import('./paginas/scroll/scroll.module').then( m => m.ScrollPageModule)
  },
  {
    path: 'listas',
    loadChildren: () => import('./paginas/listas/listas.module').then( m => m.ListasPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./paginas/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modalinfo',
    loadChildren: () => import('./paginas/modalinfo/modalinfo.module').then( m => m.ModalinfoPageModule)
  },
  {
    path: 'pover',
    loadChildren: () => import('./paginas/pover/pover.module').then( m => m.PoverPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./paginas/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./paginas/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./paginas/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
