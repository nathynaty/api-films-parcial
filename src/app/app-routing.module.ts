import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {
    path: 'people-list/:page',
    component: HomeComponent
  },
  {
    path: 'person/:id',
    component: PersonComponent
  },
  {
    path: 'film/:id',
    component: FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
