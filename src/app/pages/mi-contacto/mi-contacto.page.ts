import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { InavMi } from '../../interfaces/Inav-mi';
import { NavService } from '../../services/nav.service';
import { Platform, NavController, NavParams } from '@ionic/angular';


import { ViewChild } from '@angular/core';
//import { IonicPage,  Slides } from 'ionic-angular';



@Component({
  selector: 'app-mi-contacto',
  templateUrl: './mi-contacto.page.html',
  styleUrls: ['./mi-contacto.page.scss'],
})
export class MiContactoPage implements OnInit {
  nav: Observable<InavMi[]>;
  valor: boolean;

  @ViewChild('slide4', { read: ElementRef,  static: false })slides: ElementRef;


  constructor(private navService: NavService,
              private platform: Platform,
              
              public navCtrl: NavController,
              public navParams: NavParams
              ) { }

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




  ionViewDidLoad() {
    console.log('ionViewDidLoad Screen4Page');
  }

  ngAfterViewInit() {
    console.log('Screen4 Page');
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true;
        this.slides.slidesPerView = 'auto';
        this.slides.initialSlide = 1;

    this.slides.coverflow = {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        };
    console.log(this.slides.length);
  }

  goBack(){
    this.navCtrl.pop();
  }
}
