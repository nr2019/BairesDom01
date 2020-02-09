import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';

@Component({
  selector: 'app-mm-home',
  templateUrl: './mm-home.page.html',
  styleUrls: ['./mm-home.page.scss'],
})
export class MmHomePage implements OnInit {
  nav: Observable<InavMi[]>;
  valor: boolean;
  constructor(private navService: NavService,
              private platform: Platform) { }

  ngOnInit() {
    this.nav = this.navService.getNavMm();
    //En caso de que sea menor a 560 px cambia el deader por un action-sheet
    if ( this.platform.width() < 560 ) {
      this.valor = false;
    } else {
      this.valor = true;
    }
  }

}
