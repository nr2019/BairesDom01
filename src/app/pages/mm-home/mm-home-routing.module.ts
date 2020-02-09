import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MmHomePage } from './mm-home.page';

const routes: Routes = [
  {
    path: '',
    component: MmHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MmHomePageRoutingModule {}
