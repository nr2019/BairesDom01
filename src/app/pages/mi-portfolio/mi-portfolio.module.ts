import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPortfolioPageRoutingModule } from './mi-portfolio-routing.module';

import { MiPortfolioPage } from './mi-portfolio.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPortfolioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiPortfolioPage]
})
export class MiPortfolioPageModule {}
