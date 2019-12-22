import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiContactoPageRoutingModule } from './mi-contacto-routing.module';

import { MiContactoPage } from './mi-contacto.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiContactoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiContactoPage]
})
export class MiContactoPageModule {}
