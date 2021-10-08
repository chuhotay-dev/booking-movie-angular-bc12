import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './list-movie.component';

const route: Routes = [
  {
    path: '',
    component: ListMovieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ListMovieRoutingModule {}
