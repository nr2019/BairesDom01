import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MiServicioComponent } from './mi-servicio/mi-servicio.component';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MiServicioComponent,
    PruebaComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MiServicioComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    // lo importo para poder trutilizar el header
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
