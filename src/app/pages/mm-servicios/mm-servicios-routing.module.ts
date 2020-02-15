import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmServiciosPage } from './mm-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: MmServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmServiciosPageRoutingModule {}
