import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TheaterComponent } from './pages/theater/theater.component';
import { ReviewComponent } from './pages/review/review.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    TheaterComponent,
    ReviewComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
