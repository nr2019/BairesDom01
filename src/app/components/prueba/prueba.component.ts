import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
})
export class PruebaComponent implements OnInit {
  css1: string;
  css2: string;
  css3: string;
  css4: string;

  constructor() {
    this.css1 = 'option active';
    this.css2 = 'option';
    this.css3 = 'option';
    this.css4 = 'option';
  }

  ngOnInit() {}

  efecto(opcion) {
    if (opcion === '1') {
      this.css1 = this.cargarEfecto(this.css1);
      this.css2 = this.cargarContrario(this.css1);
      this.css3 = this.cargarContrario(this.css1);
      this.css4 = this.cargarContrario(this.css1);
    }
    if (opcion === '2') {
      this.css2 = this.cargarEfecto(this.css2);

      this.css1 = this.cargarContrario(this.css2);
      this.css3 = this.cargarContrario(this.css2);
      this.css4 = this.cargarContrario(this.css2);
    }
    if (opcion === '3') {
      this.css3 = this.cargarEfecto(this.css3);

      this.css1 = this.cargarContrario(this.css3);
      this.css2 = this.cargarContrario(this.css3);
      this.css4 = this.cargarContrario(this.css3);
    }
    if (opcion === '4') {
      this.css4 = this.cargarEfecto(this.css4);

      this.css1 = this.cargarContrario(this.css4);
      this.css2 = this.cargarContrario(this.css4);
      this.css3 = this.cargarContrario(this.css4);

    }
  }


  cargarEfecto( valor: string ) {
    let res: string;
    if (valor === 'option active') {
      res = 'option' ;

    } else {
      res = 'option active';
    }
    return res;
  }

  cargarContrario( guia: string) {
    let res: string;
    if (guia === 'option active') {
      res = 'option';
    } else {
      res = 'option active';
    }
    return res;
  }
}
