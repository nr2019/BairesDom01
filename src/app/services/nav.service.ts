import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InavMi } from '../interfaces/Inav-mi';
@Injectable({
  providedIn: 'root'
})
export class NavService {
  nav: InavMi[] = [];
  constructor( private http: HttpClient ) { }

  getNav() {
    return this.http.get<InavMi[]>('./assets/data/nav-paginas.json');
  }

  getNavMi() {
    return this.http.get<InavMi[]>('./assets/data/nav-mi.json');
  }

  getNavMm() {
    return this.http.get<InavMi[]>('./assets/data/nav-mm.json');
  }
}
