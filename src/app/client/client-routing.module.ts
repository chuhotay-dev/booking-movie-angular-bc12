import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DemoPipesComponent } from './pages/demo-pipes/demo-pipes.component';
import { HomeComponent } from './pages/home/home.component';
import { ReviewComponent } from './pages/review/review.component';
import { TheaterComponent } from './pages/theater/theater.component';

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'theater', component: TheaterComponent },
      { path: 'review', component: ReviewComponent },
      { path: 'contact', component: ContactComponent },
      {
        path: 'list-movie',
        loadChildren: () =>
          import('./pages/list-movie/list-movie.module').then(
            (m) => m.ListMovieModule
          ),
      },
      { path: 'pipes', component: DemoPipesComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
