import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Films } from '../models/films';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmserviceService {
 //crear isntancia de HttpClient
  constructor(private http: HttpClient ) { }
  //Definir la url de la API
  apiUser = environment.apiURL + 'comments/';


//metodos
getAllFilms():Observable<Films[]>{

  return this.http.get<Films[]>(this.apiUser);
}

  }

