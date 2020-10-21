import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people : any;

  constructor(public ApiConnectionService: ApiConnectionService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    let num_page = this.route.snapshot.params.page;
    this.ApiConnectionService.get_all_people(num_page).subscribe(res => { this.convert_global_people(res) });
  }

  convert_global_people(data){
    this.people = data["results"];
  }

}
