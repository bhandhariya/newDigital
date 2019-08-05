import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';



const AppRoutes :Routes = [
  { path : '' , component: AdminComponent},
  { path : 'admin' , component: AdminComponent},
  { path : '*' ,redirectTo:'admin',pathMatch:'full'},
  // {path:'first',component:FirstComponent},
  // {path:'second',component:SecondComponent},
  // {path:'psy',component:PsychatricComponent},
  // {path:'allpat',component:AllPatComponent}
]



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes),
  ]
})


export class AdminModule { }
