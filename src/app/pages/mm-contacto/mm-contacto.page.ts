import { Component, OnInit } from '@angular/core';
import { InavMi } from '../../interfaces/Inav-mi';
import { Observable } from 'rxjs';
import { IContacto } from '../../interfaces/i-contacto';
import { NavService } from '../../services/nav.service';
import { Platform } from '@ionic/angular';
import { MmSrvService } from '../../services/mm-srv.service';

@Component({
  selector: 'app-mm-contacto',
  templateUrl: './mm-contacto.page.html',
  styleUrls: ['./mm-contacto.page.scss'],
})
export class MmContactoPage implements OnInit {

  nav: Observable<InavMi[]>;
  valor: boolean;
  arreglo: Observable<IContacto[]>;
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
              private service: MmSrvService
              ) { }

  ngOnInit() {
    this.nav = this.navService.getNavMm();
    // En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      this.valor = false;
    } else {
      this.valor = true;
    }

    this.service.getContacto().subscribe ((data: IContacto) => {
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
