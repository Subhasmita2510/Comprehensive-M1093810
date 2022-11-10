import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDesignationComponent } from './components/designation/add-designation/add-designation.component';
import { DesignationComponent } from './components/designation/designation.component';
import { EditDesignationComponent } from './components/designation/edit-designation/edit-designation.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddRequestComponent } from './components/requestleave/add-request/add-request.component';
import { EditRequestComponent } from './components/requestleave/edit-request/edit-request.component';
import { RequestleaveComponent } from './components/requestleave/requestleave.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'h',
    component:HomeComponent,
  },
  {
    path:'deg',
    component:DesignationComponent
  },
  {
    path:'deg/add',
    component:AddDesignationComponent
  },
  {
    path:'deg/deg/edit/:id',
    component:EditDesignationComponent
  },
  {
    path:'emp',
    component:EmployeeComponent
  },
  {
    path:'emp/add',
    component:AddEmployeeComponent
  },
  {
    path:'emp/emp/edit/:id',
    component:EditEmployeeComponent
  },
  {
    path:'lev',
    component:RequestleaveComponent
  },
  {
    path:'lev/lev/edit/:id',
    component: EditRequestComponent 
  },
  {
    path:'lev/add',
    component:AddRequestComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
