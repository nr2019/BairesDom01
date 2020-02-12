import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmNosotrosPage } from './mm-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: MmNosotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmNosotrosPageRoutingModule {}
