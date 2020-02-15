import { Component, OnInit } from '@angular/core';
import { IServicios } from '../../interfaces/i-servicios';
import { InavMi } from '../../interfaces/Inav-mi';
import { Observable } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { MmSrvService } from '../../services/mm-srv.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mm-servicios',
  templateUrl: './mm-servicios.page.html',
  styleUrls: ['./mm-servicios.page.scss'],
})
export class MmServiciosPage implements OnInit {
  mostrarServicio: boolean = false; //Al hacer click en un servicio se activa para que sea mostrado el componente "servicio"
  srvClick: IServicios; 
  nav: Observable<InavMi[]>;
  servicios: Observable<IServicios[]>;
  valor: boolean; // Identifica que slide mostrar dependiendo la resolución
  // Opciones para slide grande
  slideOptsGrande = {
    slidesPerView: 5.3,
    freeMode: false,
    //centeredSlides: true,
    pagination: { // muestra bullets
      el: '.swiper-pagination',
      type: 'bullets',

    },

    // breakpoint para manejar el responsive
    breakpoints: {
      // >= 320px
      320: {
        slidesPerView: 1.3,
        //spaceBetween: 20
      },
      // >= 480px
      480: {
        slidesPerView: 2.3,
        //spaceBetween: 30
      },
      // >= 640px
      640: {
        slidesPerView: 3.3,
        //spaceBetween: 10
      },
      // >= 800px
      800: {
        slidesPerView: 4.3,
        //spaceBetween: 40
      },
      // >= 1200px
      1200: {
        slidesPerView: 5.3,
        //spaceBetween: 40
      }
    },
  };

  constructor(private navService: NavService,
              private service: MmSrvService,
              private platform: Platform) { }

  ngOnInit() {
    this.nav = this.navService.getNavMm();
    //En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      //chico
      this.valor = false;
    } else {
      // grande
      this.valor = true;
    }

    //Carga de servicios
    this.servicios = this.service.getServicios();
  }
  cardClick(servicio: IServicios) {

    this.mostrarServicio = true;
    this.srvClick = servicio;
  }


  slideClick(event) {

  }
}

