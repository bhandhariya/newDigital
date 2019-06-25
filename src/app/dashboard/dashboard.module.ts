import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes,RouterModule} from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';

const AppRoutes :Routes = [
  { path : '' , component: DashboardComponent},
  { path : 'dashboard' , component: DashboardComponent},
  { path : '*' ,redirectTo:'dashboard',pathMatch:'full'},
  {path:'first',component:FirstComponent}
]

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, TestComponent, FirstComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes)
  ]
})
export class DashboardModule { }
