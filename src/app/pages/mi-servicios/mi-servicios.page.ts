import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';
import { NavService } from '../../services/nav.service';
import { Platform, Events } from '@ionic/angular';
import { IMiServicios } from '../../interfaces/imi-servicios';
import { MiSrvService } from '../../services/mi-srv.service';

@Component({
  selector: 'app-mi-servicios',
  templateUrl: './mi-servicios.page.html',
  styleUrls: ['./mi-servicios.page.scss'],
})
export class MiServiciosPage implements OnInit {

  nav: Observable<InavMi[]>;
  servicios: Observable<IMiServicios[]>;
  valor: boolean;
  cantSlide: number;
  opcionesSlide: string;
  titulo: string;
  descripcion: string;
  imagen: string;

  slideOpts = {
    slidesPerView: 7.3,
    freeMode: true,
  };
  slideOpts2 = {
    slidesPerView: 2.3,
    freeMode: true,
  };


  constructor(private navService: NavService,
              private miService: MiSrvService,
              private platform: Platform,
              ) { }

  ngOnInit() {
    this.nav = this.navService.getNavMi();
    //En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      //chico
      this.valor = false;
      this.opcionesSlide = 'slideOpts2';
    } else{
      // grande
      this.valor = true;
      this.opcionesSlide = 'slideOpts';
    }

    //Carga de servicios
    this.servicios = this.miService.getServicios();
  }

  cardClick(servicio) {
    this.titulo = servicio.titulo;
    this.descripcion = servicio.descripcion;
    this.imagen = servicio.imagen;
  }
}
