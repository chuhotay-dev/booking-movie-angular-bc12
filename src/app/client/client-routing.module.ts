import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ContactComponent } from './pages/contact/contact.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
