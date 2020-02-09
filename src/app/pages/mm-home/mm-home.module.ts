import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmHomePageRoutingModule } from './mm-home-routing.module';

import { MmHomePage } from './mm-home.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmHomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MmHomePage]
})
export class MmHomePageModule {}
