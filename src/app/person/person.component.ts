import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person : any;
  movie = [];
  specie = [];
  vehicle = [];
  starship = [];

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let num_id = this.route.snapshot.params.id;
    this.ApiConnectionService.get_person(num_id).subscribe(res => { this.convert_global_person(res) }); 

  }

  convert_global_person(data){
    this.person = data;

    this.person.films.forEach(movie_url=> {
      //console.log(movie_url);
      let id_movie = movie_url.split('/')[5];
      this.ApiConnectionService.get_film(id_movie).subscribe(resp => { this.convert_global_movie(resp) });
    });

    this.person.species.forEach(specie_url=> {
      //console.log(specie_url);
      let id_specie = specie_url.split('/')[5];
      this.ApiConnectionService.get_species(id_specie).subscribe(resp => { this.convert_global_specie(resp) });
    });

    this.person.vehicles.forEach(vehicle_url=> {
      //console.log(vehicle_url);
      let id_vehicle = vehicle_url.split('/')[5];
      this.ApiConnectionService.get_vehicles(id_vehicle).subscribe(resp => { this.convert_global_vehicle(resp) });
    });

    this.person.starships.forEach(starship_url=> {
      //console.log(starship_url);
      let id_starship = starship_url.split('/')[5];
      this.ApiConnectionService.get_starships(id_starship).subscribe(resp => { this.convert_global_starship(resp) });
    });
    
  }

  convert_global_movie(dato){
      this.movie.push(dato);
  }

  convert_global_specie(dato){
    this.specie.push(dato);
  }

  convert_global_vehicle(dato){
    this.vehicle.push(dato);
  }

  convert_global_starship(dato){
    this.starship.push(dato);
  }
  

}
