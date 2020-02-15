import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentacionPage } from './presentacion.page';

//import { TabsPage } from '';



const routes: Routes = [
  {
    path: '',
    component: PresentacionPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentacionPageRoutingModule {}
