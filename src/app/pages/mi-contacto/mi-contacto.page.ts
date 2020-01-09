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
  calle: string;
  numero: number;
  partido: string;
  cp: string;
  telefono: string;
  provincia: string;
  pais: string;
  mail: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;

  constructor(private navService: NavService,
              private platform: Platform,
              private miService: MiSrvService
              ) {}

  ngOnInit() {
    this.nav = this.navService.getNavMi();
    // En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      this.valor = false;
      console.log(this.valor);
    } else {
      this.valor = true;
    }

    this.miService.getContacto().subscribe ((data: IMiContacto) => {
                                                        //console.log(data);
                                                        this.calle = data['calle'];
                                                        this.numero = data['numero'];
                                                        this.partido = data['partido'];
                                                        this.cp = data['cp'];
                                                        this.telefono = data['telefono'];
                                                        this.provincia = data['provincia'];
                                                        this.pais = data['pais'];
                                                        this.mail = data['mail'];
                                                        this.facebook = data['facebook'];
                                                        this.twitter = data['twitter'];
                                                        this.instagram = data['instagram'];
                                                        this.linkedin = data['linkedin'];
                                                      });
  }
}
