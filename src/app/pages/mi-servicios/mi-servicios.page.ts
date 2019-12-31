import { Component, OnInit, ViewChild } from '@angular/core';
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

  mostrarServicio: boolean = false; //Al hacer click en un servicio se activa para que sea mostrado el componente "servicio"
  srvClick: IMiServicios; //any; 
  nav: Observable<InavMi[]>;
  servicios: Observable<IMiServicios[]>;
  valor: boolean; // Identifica que slide mostrar dependiendo la resolución
  // Opciones para slide grande
    slideOptsGrande = {
    slidesPerView: 5.3,
    freeMode: false,

    pagination: {
      el: '.swiper-pagination'
    },
  };

  // Opciones para slide chico
  slideOptsChico = {
    slidesPerView: 1.3,
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
     // this.opcionesSlide = 'slideOptsChico';
    } else {
      // grande
      this.valor = true;
     // this.opcionesSlide = 'slideOptsGrande';
    }

    //Carga de servicios
    this.servicios = this.miService.getServicios();
  }

  cardClick(servicio: IMiServicios) {
    this.mostrarServicio = true;
    this.srvClick = servicio;
  }


  slideClick(event){
    //console.log(event);
  }
}
