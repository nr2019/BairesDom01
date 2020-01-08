import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';
import { NavService } from '../../services/nav.service';
import { Platform } from '@ionic/angular';
import { MiSrvService } from '../../services/mi-srv.service';
import { IMiContacto } from '../../interfaces/imi-contacto';

@Component({
  selector: 'app-mi-contacto',
  templateUrl: './mi-contacto.page.html',
  styleUrls: ['./mi-contacto.page.scss'],
})
export class MiContactoPage implements OnInit {

  nav: Observable<InavMi[]>;
  valor: boolean;
  arreglo: Observable<IMiContacto[]>;
  contacto: IMiContacto;
  constructor(private navService: NavService,
              private platform: Platform,
              private miService: MiSrvService
              ) { }

  ngOnInit() {
    this.nav = this.navService.getNavMi();
    // En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      this.valor = false;
      console.log(this.valor);
    } else{
      this.valor = true;
    }

    this.contacto = this.miService.getContacto();
    //this.arreglo = this.miService.getContacto();
    //this.contacto = this.arreglo[0];
   // this.miService.getContacto()
     /*     .subscribe((data) => {  this.contacto = data[0];
                                 // this.contacto = data()[0]
                                  console.log( data [0] );
                                  //console.log( this.contacto );
                                });*/

  }
}
