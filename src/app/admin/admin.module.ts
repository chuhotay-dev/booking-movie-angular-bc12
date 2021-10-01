import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageMovieComponent } from './pages/manage-movie/manage-movie.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManageMovieComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
