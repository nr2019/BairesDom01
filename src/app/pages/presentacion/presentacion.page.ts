import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.page.html',
  styleUrls: ['./presentacion.page.scss'],
})
export class PresentacionPage implements OnInit {

  @ViewChild('div1', { static: true }) div1: ElementRef;
  @ViewChild('div2', { static: true }) div2: ElementRef;
  @ViewChild('div3', { static: true }) div3: ElementRef;
  @ViewChild('div4', { static: true }) div4: ElementRef;
  @ViewChild('div5', { static: true }) div5: ElementRef;
  valor: boolean; // Identifica que slide mostrar dependiendo la resolución

  constructor(private platform: Platform) { }

  ngOnInit() {
     //Se modifican botones de divs
     if ( this.platform.width() < 560 ) {
      //chico
      this.valor = false;
    } else {
      // grande
      this.valor = true;
    }
  }

  efecto(opcion: string) {
    if (opcion === '1') {
      this.div1 = this.cambiarValor( this.div1 );
    }
    if (opcion === '2') {
      this.div2 = this.cambiarValor( this.div2 );
    }
    if (opcion === '3') {
      this.div3 = this.cambiarValor( this.div3 );
    }
    if (opcion === '4') {
      this.div4 = this.cambiarValor( this.div4 );
    }
    if (opcion === '5') {
      this.div5 = this.cambiarValor( this.div5 );
    }
  }

  cambiarValor( elemento: any ) {
    $('.option').removeClass('active');
    elemento.nativeElement.classList.add('active');
    return elemento;
  }
 }
