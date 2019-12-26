import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';
import { NavService } from '../../services/nav.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mi-contacto',
  templateUrl: './mi-contacto.page.html',
  styleUrls: ['./mi-contacto.page.scss'],
})
export class MiContactoPage implements OnInit {
  nav: Observable<InavMi[]>;
  valor: boolean;
  constructor(private navService: NavService,
              private platform: Platform) { }

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
  }
}