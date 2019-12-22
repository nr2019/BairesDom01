import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiContactoPage } from './mi-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: MiContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiContactoPageRoutingModule {}
