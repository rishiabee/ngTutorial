import { Component, OnInit } from '@angular/core';
import {PeopleData} from "../../../core/service/peopleData";
import {SwapiService} from "../../../core/service/swapi.service";


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  films: Array<any> = [];
  people: Array<PeopleData> = [];
  planets: Array<any> = [];
  species: Array<any> = [];
  starships: Array<any> = [];
  vehicles: Array<any> = [];

  constructor(private swapiService: SwapiService) {
  }



  ngOnInit(): void {
    this.showPeople();
    this.showFilms();
    this.showPlanets();
    this.showSpecies();
    this.showStarships();
    this.showVehicles();
  }

  showPeople() {
    this.swapiService.getRandomPeople()
      .subscribe((data: any) => {
        this.people = data?.results})
  }

  showFilms() {
    this.swapiService.getFilms()
      .subscribe((data: any) => {
        this.films = data?.results})
  }

  showPlanets() {
    this.swapiService.getFilms()
      .subscribe((data: any) => {
        this.planets = data?.results})
  }

  showSpecies() {
    this.swapiService.getSpecies()
      .subscribe((data: any) => {
        this.species = data?.results})
  }

  showStarships() {
    this.swapiService.getStarships()
      .subscribe((data: any) => {
        this.starships = data?.results})
  }

  showVehicles() {
    this.swapiService.getVehicles()
      .subscribe((data: any) => {
        this.vehicles = data?.results})
  }

}
