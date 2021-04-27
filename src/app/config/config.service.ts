import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Bicicleta } from '../Bicicleta';

@Injectable({
  providedIn:'root'
})
export class ConfigService {

urlBase = environment.pathUrl;
//enca//bezado = new HttpHeaders();


private readonly pathBicicletas = {
  bicis: '/bicicletas/todas'
};

  constructor(private http: HttpClient, private router: Router) {

  }

  get() : Observable<Bicicleta> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'responseType': 'json'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
console.log(requestOptions);
    let ruta = this.urlBase + this.pathBicicletas.bicis;
 /*   const encabezado = new HttpHeaders();
    let th = this;
    encabezado.set("Content-Type", "application/json");*/
        return this.http.get<Bicicleta>(ruta, requestOptions );
  }
}
