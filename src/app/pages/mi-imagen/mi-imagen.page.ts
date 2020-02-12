import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mi-imagen',
  templateUrl: './mi-imagen.page.html',
  styleUrls: ['./mi-imagen.page.scss'],
})
export class MiImagenPage implements OnInit {
  img: any;

  @ViewChild('slider', { read: ElementRef,  static: false })slider: ElementRef;

  sliderOpts = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private navParams: NavParams,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  zoom(zoomIn: boolean) {

  }

  close() {
    this.modalCtrl.dismiss();
  }
}
