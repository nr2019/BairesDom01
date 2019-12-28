import { Component, OnInit, Input } from '@angular/core';
import { IMiServicios } from '../../interfaces/imi-servicios';
import { MiSrvService } from '../../services/mi-srv.service';

@Component({
  selector: 'app-mi-servicio',
  templateUrl: './mi-servicio.component.html',
  styleUrls: ['./mi-servicio.component.scss'],
})
export class MiServicioComponent implements OnInit{
 
  //@Input() titulo: string = '';
  //@Input() descripcion: string = '';
  //@Input() imagen: string = '';
  @Input() srvClick: IMiServicios; //any;

  constructor(private miService: MiSrvService) {}

  ngOnInit() {
  }


}
