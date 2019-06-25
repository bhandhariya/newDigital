import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes,RouterModule} from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const AppRoutes :Routes = [
  { path : '' , component: DashboardComponent},
  { path : 'dashboard' , component: DashboardComponent},
  { path : '*' ,redirectTo:'dashboard',pathMatch:'full'},
]

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes)
  ]
})
export class DashboardModule { }
