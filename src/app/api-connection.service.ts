import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(public http: HttpClient) {}

  url="https://swapi.dev/api";

  get_all_people(num_page){
    return this.http.get(this.url+'/people/?page='+num_page);
  }

  get_person(num_id){
    return this.http.get(this.url+'/people/' + num_id + '/');
  }

  get_species(id_specie){
    return this.http.get(this.url+'/species/' + id_specie + '/');
  }

  get_film(id_movie){
    return this.http.get(this.url+'/films/' + id_movie + '/');
  }

  get_planets_film(id_planet){
    return this.http.get(this.url+'/planets/' + id_planet + '/');
  }

  get_starships(id_starship){
    return this.http.get(this.url+'/starships/' + id_starship + '/');
  }

  get_vehicles(id_vehicle){
    return this.http.get(this.url+'/vehicles/' + id_vehicle + '/');
  }

}
