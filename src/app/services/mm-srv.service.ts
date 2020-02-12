import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServicios } from '../interfaces/i-servicios';
import { IGaleriaFull } from '../interfaces/i-galeria';
import { IAmigos } from '../interfaces/i-amigos';
import { IContacto } from '../interfaces/i-contacto';

@Injectable({
  providedIn: 'root'
})
export class MmSrvService {
  servicios: any;
  valores: any = [];

  constructor(private http: HttpClient) { }


  getServicios(){
    this.servicios = this.http.get<IServicios[]>('./assets/data/mi-servicios.json');
    return this.servicios;
  }

  buscarServicio( id: number ): IServicios[] {
    console.log(id);
    let respuesta: any;

    // se recorre toda la lista de servicios
    for ( let servicio of this.servicios ) {
       if ( servicio.id === id ) {
        respuesta = servicio;
       }
    }
    return respuesta;
  }

  getGaleria() {
    return this.http.get<IGaleriaFull[]>('./assets/data/mi-galeria.json');
  }

  getAmigos() {
    return this.http.get<IAmigos[]>('./assets/data/mi-amigos.json');
  }

  getContacto() {
    return this.http.get<IContacto>('./assets/data/contacto.json');
  }

}
