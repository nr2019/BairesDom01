import { Component, OnInit, Input } from '@angular/core';
import { IServicios } from '../../interfaces/i-servicios';
import { MmSrvService } from '../../services/mm-srv.service';
import { ModalController } from '@ionic/angular';
import { MiImagenPage } from '../../pages/mi-imagen/mi-imagen.page';

@Component({
  selector: 'app-mm-servicio',
  templateUrl: './mm-servicio.component.html',
  styleUrls: ['./mm-servicio.component.scss'],
})
export class MmServicioComponent implements OnInit {
  sliderOpts = {
    zoom: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    slideSPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 20
  };

  @Input() srvClick: IServicios;

  constructor(private miService: MmSrvService,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  openPreview(imagen) {
    this.modalCtrl.create({
      component: MiImagenPage,
      componentProps: {
         img: imagen
      }
    }).then(modal => modal.present());
  }
}
