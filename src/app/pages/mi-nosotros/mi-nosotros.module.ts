import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiNosotrosPageRoutingModule } from './mi-nosotros-routing.module';

import { MiNosotrosPage } from './mi-nosotros.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiNosotrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiNosotrosPage]
})
export class MiNosotrosPageModule {}
