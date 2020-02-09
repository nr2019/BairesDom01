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
  colores: {
    primario: string,
    secundario: string,
    terciario: string
  };
  constructor(private actionSheetCtrl: ActionSheetController,
              private router: Router) { }

  ngOnInit() {

    if ( this.rubro === 'MI') {
      this.colores = {
        primario : 'MI-PRIMARIO',
        secundario : 'MI-SECUNDARIO',
        terciario : 'MI-TERCIARIO',
      };
    }

    if ( this.rubro === 'MM') {
        this.colores = {
        primario : 'MM-PRIMARIO',
        secundario : 'MM-SECUNDARIO',
        terciario : 'MM-TERCIARIO',
        };
      }

    if ( this.rubro === 'CT') {
        this.colores = {
          primario : 'CT-PRIMARIO',
          secundario : 'CT-SECUNDARIO',
          terciario : 'CT-TERCIARIO',
        };
      }
    if ( this.rubro === 'HG') {
        this.colores = {
          primario : 'HG-PRIMARIO',
          secundario : 'HG-SECUNDARIO',
          terciario : 'HG-TERCIARIO',
        };
      }
  }

  async menu() {
    
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
    } else{
      this.cssSeccion[3] = 'seccionInactivaMi';
    }

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
          this.router.navigate(['/mi-home']);
        }
      },
      {
        text: 'Servicios',
        icon: 'hammer',
        cssClass: this.cssSeccion[1],
        handler: () => {
          this.router.navigate(['/mi-servicios']);
        }
      },
      {
        text: 'Nosotros',
        icon: 'person',
        cssClass: this.cssSeccion[2],
        handler: () => {
          this.router.navigate(['/mi-nosotros']);
        }
      },
      {
        text: 'Contacto',
        icon: 'contact',
        cssClass: this.cssSeccion[3],
        handler: () => {
          this.router.navigate(['/mi-contacto']);
        }
      }]
    });
    // Muestra el actionSheet
    await actionSheet.present();
  }



  getColorSecu() {
    if ( this.rubro === 'MI') {
      this.colores = {
        primario : 'MI-PRIMARIO',
        secundario : '#fff',
        terciario : 'MI-TERCIARIO',
      };
    }

    if ( this.rubro === 'MM') {
        this.colores = {
        primario : 'MM-PRIMARIO',
        secundario : '#aaa',
        terciario : 'MM-TERCIARIO',
        };
      }

    if ( this.rubro === 'CT') {
        this.colores = {
          primario : 'CT-PRIMARIO',
          secundario : 'CT-SECUNDARIO',
          terciario : 'CT-TERCIARIO',
        };
      }
    if ( this.rubro === 'HG') {
        this.colores = {
          primario : 'HG-PRIMARIO',
          secundario : 'HG-SECUNDARIO',
          terciario : 'HG-TERCIARIO',
        };
      }
    return this.colores.secundario;
  }


}
