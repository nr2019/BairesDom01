import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMiServicios } from '../interfaces/imi-servicios';
import { IMiGaleriaFull } from '../interfaces/imi-galeria';
import { IMiAmigos } from '../interfaces/imi-amigos';
import { IMiContacto } from '../interfaces/imi-contacto';

@Injectable({
  providedIn: 'root'
})
export class MiSrvService {
  servicios: any;
  
  valores: any = [];
  
  constructor(private http: HttpClient) { }

  getServicios(){
    this.servicios = this.http.get<IMiServicios[]>('./assets/data/mi-servicios.json');
    return this.servicios;
  }

  buscarServicio( id: number ): IMiServicios[] {
    console.log(id);
    let respuesta: any;

    // se recorre toda la lista de servicios
    for( let servicio of this.servicios ){
       if ( servicio.id === id ){
        respuesta = servicio;
       }
    }
    return respuesta;
  }

  getGaleria() {
    return this.http.get<IMiGaleriaFull[]>('./assets/data/mi-galeria.json');
  }

  getAmigos() {
    return this.http.get<IMiAmigos[]>('./assets/data/mi-amigos.json');
  }

  getContacto() {
    this.http.get<IMiContacto[]>('./assets/data/mi-contacto.json')
                                .subscribe ((data) => { this.valores = data });
                                    //estructura = data;
                                                         //console.log( "este" );
                                                         //console.log( estructura[0]);
                                                         


    return estructura;
  }

}
