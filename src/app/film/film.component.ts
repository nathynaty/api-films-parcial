import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film : any;
  character = [];
  planet = [];
  starship = [];
  vehicle = [];

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let num_id = this.route.snapshot.params.id;
    this.ApiConnectionService.get_film(num_id).subscribe(res => { this.convert_global_film(res) });
  }

  convert_global_film(data){
    this.film = data;
    
    this.film.characters.forEach(character_url=> {
      //console.log(character_url);
      let id_person = character_url.split('/')[5];
      this.ApiConnectionService.get_person(id_person).subscribe(resp => { this.convert_global_character(resp) });
    });

    this.film.planets.forEach(planet_url=> {
      //console.log(planet_url);
      let id_planet = planet_url.split('/')[5];
      this.ApiConnectionService.get_planets_film(id_planet).subscribe(resp => { this.convert_global_planet(resp) });
    });

    this.film.starships.forEach(starship_url=> {
      //console.log(starship_url);
      let id_starship = starship_url.split('/')[5];
      this.ApiConnectionService.get_starships(id_starship).subscribe(resp => { this.convert_global_starship(resp) });
    });

    this.film.vehicles.forEach(vehicle_url=> {
      //console.log(vehicle_url);
      let id_vehicle = vehicle_url.split('/')[5];
      this.ApiConnectionService.get_vehicles(id_vehicle).subscribe(resp => { this.convert_global_vehicle(resp) });
    });


  }

  convert_global_character(dato){
    this.character.push(dato);
  }

  convert_global_planet(dato){
    this.planet.push(dato);
  }

  convert_global_starship(dato){
    this.starship.push(dato)
  }

  convert_global_vehicle(dato){
    this.vehicle.push(dato)
  }

}
