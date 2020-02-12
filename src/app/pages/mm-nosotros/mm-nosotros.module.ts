import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MmNosotrosPageRoutingModule } from './mm-nosotros-routing.module';

import { MmNosotrosPage } from './mm-nosotros.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MmNosotrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MmNosotrosPage]
})
export class MmNosotrosPageModule {}
