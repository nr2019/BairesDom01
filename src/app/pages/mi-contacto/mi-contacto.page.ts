import { Component, OnInit, ElementRef, ViewChild, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';
import { NavService } from '../../services/nav.service';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { R3TargetBinder } from '@angular/compiler';

declare var google;

@Component({
  selector: 'app-mi-contacto',
  templateUrl: './mi-contacto.page.html',
  styleUrls: ['./mi-contacto.page.scss'],
})
export class MiContactoPage implements OnInit {

  map: any;
  @ViewChild('mapElement', { read: ElementRef,  static: false })mapElement: ElementRef;
  nav: Observable<InavMi[]>;
  valor: boolean;

  constructor(private navService: NavService,
              private platform: Platform,
              private geolocation: Geolocation) { }

  ngOnInit() {
    this.nav = this.navService.getNavMi();
    //En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      //this.valor = 'condense';
      this.valor = false;
      console.log(this.valor);
    } else{
      this.valor = true;
    }

    this.map = this.loadMap();
  }


  async loadMap() {
    const rta = await this.geolocation.getCurrentPosition();
    const latlon = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    }
    console.log(latlon);
  }

}
