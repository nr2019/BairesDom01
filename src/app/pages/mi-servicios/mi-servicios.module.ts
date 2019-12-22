import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiServiciosPageRoutingModule } from './mi-servicios-routing.module';

import { MiServiciosPage } from './mi-servicios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiServiciosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiServiciosPage]
})
export class MiServiciosPageModule {}
