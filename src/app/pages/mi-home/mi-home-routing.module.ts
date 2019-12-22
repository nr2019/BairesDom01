import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiHomePage } from './mi-home.page';

const routes: Routes = [
  {
    path: '',
    component: MiHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiHomePageRoutingModule {}
