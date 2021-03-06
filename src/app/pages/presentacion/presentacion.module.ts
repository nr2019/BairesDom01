import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentacionPageRoutingModule } from './presentacion-routing.module';

import { PresentacionPage } from './presentacion.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PresentacionPage]
})
export class PresentacionPageModule {}
