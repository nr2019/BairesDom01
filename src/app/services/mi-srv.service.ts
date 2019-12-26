import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMiServicios } from '../interfaces/imi-servicios';
import { IMiGaleria, IMiGaleriaFull } from '../interfaces/imi-galeria';
import { IMiAmigos } from '../interfaces/imi-amigos';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MiSrvService {
  //todo: IMiGaleriaFull[] = [];
  servicios: any;

  constructor(private http: HttpClient) { }

  getServicios(){
    this.servicios = this.http.get<IMiServicios[]>('./assets/data/mi-servicios.json');
    return this.servicios;
    //return this.http.get<IMiServicios[]>('./assets/data/mi-servicios.json');
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
    //return this.http.get<IMiGaleria[]>('./assets/data/mi-galeria.json');
    return this.http.get<IMiGaleriaFull[]>('./assets/data/mi-galeria.json');
//    .subscribe( ( resp: IMiGaleriaFull[] ) =>{
      // em resp, voy a tener la respuesta de la petición, por lo que luego
      // la asigno al arreglo de paises
  //               this.todo = resp;
    //             console.log(resp);
      //         } )
  //;
  }


  getAmigos() {
    return this.http.get<IMiAmigos[]>('./assets/data/mi-amigos.json');
  }

}
