import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {Routes,RouterModule} from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TestComponent } from './test/test.component';
import { FirstComponent } from './first/first.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SecondComponent } from './second/second.component';
import { NumberModule } from '../shared/number.module';
import { PsychatricComponent } from './psychatric/psychatric.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AllPatComponent } from './all-pat/all-pat.component';


const AppRoutes :Routes = [
  { path : '' , component: DashboardComponent},
  { path : 'dashboard' , component: DashboardComponent},
  { path : '*' ,redirectTo:'dashboard',pathMatch:'full'},
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'psy',component:PsychatricComponent},
  {path:'allpat',component:AllPatComponent}
]

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, TestComponent, FirstComponent, SecondComponent,
    PsychatricComponent,
    AllPatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes),
    FormsModule,ReactiveFormsModule,
    NumberModule,
    MatInputModule,MatNativeDateModule,MatDatepickerModule,MatSelectModule,MatButtonModule,MatIconModule,
    MatExpansionModule
  ]
})
export class DashboardModule { }
