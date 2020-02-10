import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmContactoPageRoutingModule } from './mm-contacto-routing.module';

import { MmContactoPage } from './mm-contacto.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmContactoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MmContactoPage]
})
export class MmContactoPageModule {}
