import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMiServicios } from '../interfaces/imi-servicios';
import { IMiGaleria, IMiGaleriaFull } from '../interfaces/imi-galeria';
import { IMiAmigos } from '../interfaces/imi-amigos';

@Injectable({
  providedIn: 'root'
})
export class MiSrvService {
  todo: IMiGaleriaFull[] = [];
  constructor(private http: HttpClient) { }

  getServicios(){
    return this.http.get<IMiServicios[]>('./assets/data/mi-servicios.json');
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
