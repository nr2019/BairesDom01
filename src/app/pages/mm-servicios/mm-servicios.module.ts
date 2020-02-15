import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmServiciosPageRoutingModule } from './mm-servicios-routing.module';

import { MmServiciosPage } from './mm-servicios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmServiciosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MmServiciosPage]
})
export class MmServiciosPageModule {}
