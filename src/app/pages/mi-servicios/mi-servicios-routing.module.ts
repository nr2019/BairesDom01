import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiServiciosPage } from './mi-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: MiServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiServiciosPageRoutingModule {}
