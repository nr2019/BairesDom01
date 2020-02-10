import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { InavMi } from '../../interfaces/Inav-mi';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() navitems: InavMi;
  @Input() valor: boolean;
  @Input() seccion: string;
  @Input() rubro: string;
  cssSeccion = [];

  home: string;
  servicios: string;
  nosotros: string;
  contacto: string;

  constructor(private actionSheetCtrl: ActionSheetController,
              private router: Router) { }

  ngOnInit() {}

  async menu() {

    this.cssActionsheet();
    this.definirNavegacion();

    // El código se ejecuta de manera asíncrona
    // El código le dice espera hasta que el actionseeh controller cree el actionSheet
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'BairesDom',
      // Evita que al hacer click fuera del actionsheet se me cierre el mismo.
      //backdropDismiss: false,
      buttons: [{
        text: 'Inicio',
        // Se ve mejor en IOs, y le da al ícono un tono rojo, de que va a romper algo.
        role: 'destructive',
        //Le agrego CSS
        //cssClass: 'rojo',
        cssClass: this.cssSeccion[0],
        // Los íconos están en la docu de Ionic
        icon: 'home',
        // Ataja el evento click
        handler: () => {
          //this.router.navigate(['/mi-home']);
          this.router.navigate([this.home]);
        }
      },
      {
        text: 'Servicios',
        icon: 'hammer',
        cssClass: this.cssSeccion[1],
        handler: () => {
          //this.router.navigate(['/mi-servicios']);
          this.router.navigate([this.servicios]);
        }
      },
      {
        text: 'Nosotros',
        icon: 'person',
        cssClass: this.cssSeccion[2],
        handler: () => {
          //this.router.navigate(['/mi-nosotros']);
          this.router.navigate([this.nosotros]);
        }
      },
      {
        text: 'Contacto',
        icon: 'contact',
        cssClass: this.cssSeccion[3],
        handler: () => {
          //this.router.navigate(['/mi-contacto']);
          this.router.navigate([this.contacto]);
        }
      }]
    });
    // Muestra el actionSheet
    await actionSheet.present();
  }

  cssActionsheet() {
    if (this.seccion === 'MI-HOME') {
      this.cssSeccion[0] = 'seccionActivaMi';
    } else {
      this.cssSeccion[0] = 'seccionInactivaMi';
    }
    if (this.seccion === 'MI-SERVICIOS') {
      this.cssSeccion[1] = 'seccionActivaMi';
    } else {
      this.cssSeccion[1] = 'seccionInactivaMi';
    }
    if (this.seccion === 'MI-NOSOTROS') {
      this.cssSeccion[2] = 'seccionActivaMi';
    } else {
      this.cssSeccion[2] = 'seccionInactivaMi';
    }
    if (this.seccion === 'MI-CONTACTO') {
      this.cssSeccion[3] = 'seccionActivaMi';
    } else {
      this.cssSeccion[3] = 'seccionInactivaMi';
    }
  }

  definirNavegacion() {
    if (this.rubro === 'MI') {
      this.home = '/mi-home';
      this.servicios = '/mi-servicios';
      this.nosotros = '/mi-nosotros';
      this.contacto = '/mi-contacto';
    }
    if (this.rubro === 'MM') {
      this.home = '/mm-home';
      this.servicios = '/mm-servicios';
      this.nosotros = '/mm-nosotros';
      this.contacto = '/mm-contacto';
    }

    if (this.rubro === 'CT') {
      this.home = '/ct-home';
      this.servicios = '/ct-servicios';
      this.nosotros = '/ct-nosotros';
      this.contacto = '/ct-contacto';
    }
    if (this.rubro === 'HG') {
      this.home = '/hg-home';
      this.servicios = '/hg-servicios';
      this.nosotros = '/hg-nosotros';
      this.contacto = '/hg-contacto';
    }
  }

}
