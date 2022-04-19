import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeopleData} from "./peopleData";
import {FilmData} from "./filmData";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://swapi.dev/api/';

  getPeople() {
    return this.http.get<Observable<PeopleData>>(this.baseUrl+'people');
  }

  getFilms() {
    return this.http.get<Observable<FilmData>>(this.baseUrl+'films');
  }

  getPlanets() {
    return this.http.get<any>(this.baseUrl+'planets');
  }

  getSpecies() {
    return this.http.get<any>(this.baseUrl+'species');
  }

  getStarships() {
    return this.http.get<any>(this.baseUrl+'starships');
  }

  getVehicles() {
    return this.http.get<any>(this.baseUrl+'vehicles');
  }
}
