import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmContactoPage } from './mm-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: MmContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmContactoPageRoutingModule {}
