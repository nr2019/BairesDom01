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
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };

  nav: Observable<InavMi[]>;
  
  //galeriaFull: IMiGaleriaFull[] = [];
  galeriaFull: any;
  galerias: IMiGaleria[] = [];
  valor: boolean;


  //prueba: any;




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
    //this.galeria = this.miService.getGaleria();
    //this.galeriaFull = this.miService.getGaleria();
    
    //console.log(this.galeriaFull);
    this.obtenerGalerias();

/*
    this.prueba = [ 
      {
          "id" : "1",
          "titulo"   : "Galeria 01",
          "galeria": [ {
                          "id" : "1",
                          "titulo"   : "Soladura 01",
                          "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                          "imagen" : "./assets/img/mi-galeria-01.jpg"
                          },
                          {
                              "id" : "2",
                              "titulo"   : "Soladura 02",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-02.jpg"
                          },
                          {
                              "id" : "3",
                              "titulo"   : "Soladura 03",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-03.jpg"
                          },
                          {
                              "id" : "4",
                              "titulo"   : "Soladura 04",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-04.jpg"
                          },
                          {
                              "id" : "5",
                              "titulo"   : "Soladura 05",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-05.webp"
                          },
                          {
                              "id" : "6",
                              "titulo"   : "Soladura 06",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-01.jpg"
                          },
                          {
                              "id" : "7",
                              "titulo"   : "Soladura 07",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-02.jpg"
                          },
                          {
                              "id" : "8",
                              "titulo"   : "Soladura 08",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-03.jpg"
                          },
                          {
                              "id" : "9",
                              "titulo"   : "Soladura 09",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-03.jpg"
                          },
                          {
                              "id" : "10",
                              "titulo"   : "Soladura 10",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-05.webp"
                          }
                  ]
      },
      {
          "id" : "2",
          "titulo"   : "Galeria 02",
          "galeria": [ {
                          "id" : "1",
                          "titulo"   : "Soladura 01",
                          "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                          "imagen" : "./assets/img/mi-galeria-01.jpg"
                          },
                          {
                              "id" : "2",
                              "titulo"   : "Soladura 02",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-02.jpg"
                          },
                          {
                              "id" : "3",
                              "titulo"   : "Soladura 03",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-03.jpg"
                          },
                          {
                              "id" : "4",
                              "titulo"   : "Soladura 04",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-04.jpg"
                          },
                          {
                              "id" : "5",
                              "titulo"   : "Soladura 05",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-05.webp"
                          },
                          {
                              "id" : "6",
                              "titulo"   : "Soladura 06",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-01.jpg"
                          },
                          {
                              "id" : "7",
                              "titulo"   : "Soladura 07",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-02.jpg"
                          },
                          {
                              "id" : "8",
                              "titulo"   : "Soladura 08",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-03.jpg"
                          },
                          {
                              "id" : "9",
                              "titulo"   : "Soladura 09",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-03.jpg"
                          },
                          {
                              "id" : "10",
                              "titulo"   : "Soladura 10",
                              "subtitulo"   : "Soldadura acero inoxidable con doble costura",
                              "imagen" : "./assets/img/mi-galeria-05.webp"
                          }
                  ]
      }
  ];
  console.log('datos a mano');
  console.log(this.prueba);*/
  }

  obtenerGalerias() {
    this.miService.getGaleria()
    .subscribe( resp => {
                        this.galeriaFull = resp;
                        //console.log(this.galeriaFull)
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
