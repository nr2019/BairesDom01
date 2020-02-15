import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'presentacion', pathMatch: 'full' },
  {
    path: 'presentacion',
    loadChildren: () => import('./pages/presentacion/presentacion.module').then( m => m.PresentacionPageModule)
  },
  {
    path: 'mi-home',
    loadChildren: () => import('./pages/mi-home/mi-home.module').then( m => m.MiHomePageModule)
  },
  {
    path: 'mi-servicios',
    loadChildren: () => import('./pages/mi-servicios/mi-servicios.module').then( m => m.MiServiciosPageModule)
  },
  {
    path: 'mi-portfolio',
    loadChildren: () => import('./pages/mi-portfolio/mi-portfolio.module').then( m => m.MiPortfolioPageModule)
  },
  {
    path: 'mi-nosotros',
    loadChildren: () => import('./pages/mi-nosotros/mi-nosotros.module').then( m => m.MiNosotrosPageModule)
  },
  {
    path: 'mi-contacto',
    loadChildren: () => import('./pages/mi-contacto/mi-contacto.module').then( m => m.MiContactoPageModule)
  },
  {
    path: 'mi-imagen',
    loadChildren: () => import('./pages/mi-imagen/mi-imagen.module').then( m => m.MiImagenPageModule)
  },
  {
    path: 'mm-home',
    loadChildren: () => import('./pages/mm-home/mm-home.module').then( m => m.MmHomePageModule)
  },
  {
    path: 'mm-contacto',
    loadChildren: () => import('./pages/mm-contacto/mm-contacto.module').then( m => m.MmContactoPageModule)
  },
  {
    path: 'mm-nosotros',
    loadChildren: () => import('./pages/mm-nosotros/mm-nosotros.module').then( m => m.MmNosotrosPageModule)
  },
  {
    path: 'mm-servicios',
    loadChildren: () => import('./pages/mm-servicios/mm-servicios.module').then( m => m.MmServiciosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
