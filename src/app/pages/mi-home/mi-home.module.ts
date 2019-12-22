import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiHomePageRoutingModule } from './mi-home-routing.module';

import { MiHomePage } from './mi-home.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiHomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiHomePage]
})
export class MiHomePageModule {}
