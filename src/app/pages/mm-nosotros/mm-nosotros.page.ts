import { Component, OnInit } from '@angular/core';
import { InavMi } from '../../interfaces/Inav-mi';
import { Observable } from 'rxjs';
import { IAmigos } from '../../interfaces/i-amigos';
import { NavService } from '../../services/nav.service';
import { Platform, ToastController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MmSrvService } from '../../services/mm-srv.service';

@Component({
  selector: 'app-mm-nosotros',
  templateUrl: './mm-nosotros.page.html',
  styleUrls: ['./mm-nosotros.page.scss'],
})
export class MmNosotrosPage implements OnInit {
  nav: Observable<InavMi[]>;
  amigos: Observable<IAmigos[]>;
  valor: boolean;
  clientes: any;
  constructor(private navService: NavService,
              private platform: Platform,
              private service: MmSrvService,
              private toastCtrl: ToastController,
              private callNumber: CallNumber) { }

  ngOnInit() {
    this.nav = this.navService.getNavMm();
    //En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      this.valor = false;
    } else {
      this.valor = true;
    }

    this.amigos = this.service.getAmigos();
    //this.clientes = ['Peugeot01', 'Bonafide01', 'Toyota01', 'Peugeot02', 'Bonafide02', 'Toyota02', 'Peugeot03', 'Bonafide03', 'Toyota03', 'Peugeot04', 'Bonafide04', 'Toyota04', 'Peugeot05', 'Bonafide05', 'Toyota05',];
    this.clientes = this.service.getClientes();
  }

  async mostrarError( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
