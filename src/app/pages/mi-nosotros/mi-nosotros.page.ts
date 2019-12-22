import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';
import { NavService } from '../../services/nav.service';
import { Platform, IonList } from '@ionic/angular';
import { IMiAmigos } from '../../interfaces/imi-amigos';
import { MiSrvService } from '../../services/mi-srv.service';

@Component({
  selector: 'app-mi-nosotros',
  templateUrl: './mi-nosotros.page.html',
  styleUrls: ['./mi-nosotros.page.scss'],
})
export class MiNosotrosPage implements OnInit {
  nav: Observable<InavMi[]>;
  amigos: Observable<IMiAmigos[]>;
  valor: boolean;
  constructor(private navService: NavService,
              private platform: Platform,
              private miService: MiSrvService) { }

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

    this.amigos = this.miService.getAmigos();
  }

  //click to call?
}
