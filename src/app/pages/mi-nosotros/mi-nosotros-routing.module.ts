import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiNosotrosPage } from './mi-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: MiNosotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiNosotrosPageRoutingModule {}
