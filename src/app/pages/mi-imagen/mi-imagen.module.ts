import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiImagenPageRoutingModule } from './mi-imagen-routing.module';

import { MiImagenPage } from './mi-imagen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiImagenPageRoutingModule
  ],
  declarations: [MiImagenPage]
})
export class MiImagenPageModule {}
