import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiPortfolioPage } from './mi-portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: MiPortfolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiPortfolioPageRoutingModule {}
