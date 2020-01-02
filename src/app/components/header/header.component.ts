import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private actionSheetCtrl: ActionSheetController,
              private router: Router) { }

  ngOnInit() {
    //console.log(this.valor);
  }

  async menu() {
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
        cssClass: 'rojo',
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
        handler: () => {
          this.router.navigate(['/mi-servicios']);
        }
      },
      /*
      {
        text: 'Portfolio',
        icon: 'brush',
        handler: () => {
          //console.log('Play clicked');
        }
      },*/
      {
        text: 'Nosotros',
        icon: 'person',
        handler: () => {
          this.router.navigate(['/mi-nosotros']);
        }
      },
      {
        text: 'Contacto',
        icon: 'contact',
        //role: 'cancel',
        handler: () => {
          this.router.navigate(['/mi-contacto']);
        }
      }]
    });
    // Muestra el actionSheet
    await actionSheet.present();
  }
}
