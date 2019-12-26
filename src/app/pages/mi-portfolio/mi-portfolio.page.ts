import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';
import { NavService } from '../../services/nav.service';
import { Platform, ModalController } from '@ionic/angular';
import { MiSrvService } from '../../services/mi-srv.service';
import { IMiGaleria, IMiGaleriaFull } from '../../interfaces/imi-galeria';
import { MiImagenPage } from '../mi-imagen/mi-imagen.page';

@Component({
  selector: 'app-mi-portfolio',
  templateUrl: './mi-portfolio.page.html',
  styleUrls: ['./mi-portfolio.page.scss'],
})
export class MiPortfolioPage implements OnInit {

  sliderOpts = {
    zoom: false,
    slideSPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 20
  };

  nav: Observable<InavMi[]>;
  galeriaFull: any;
  galerias: IMiGaleria[] = [];
  valor: boolean;

  constructor(private navService: NavService,
              private platform: Platform,
              private miService: MiSrvService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.nav = this.navService.getNavMi();
    //En caso de que sea menor a 560 px cambia el header por un action-sheet
    if ( this.platform.width() < 560 ) {
      this.valor = false;
    } else {
      this.valor = true;
    }
    this.obtenerGalerias();
  }

  obtenerGalerias() {
    this.miService.getGaleria()
    .subscribe( resp => {
                        this.galeriaFull = resp;
                        });
  }


  openPreview(imagen) {
    this.modalCtrl.create({
      component: MiImagenPage,
      componentProps:{
         img: imagen
      }
    }).then(modal => modal.present());
  }
}
