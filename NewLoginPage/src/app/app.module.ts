import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { DesignationComponent } from './components/designation/designation.component';
import { AddDesignationComponent } from './components/designation/add-designation/add-designation.component';
import { EditDesignationComponent } from './components/designation/edit-designation/edit-designation.component';
import { DesignationListComponent } from './components/designation/designation-list/designation-list.component';
import { RequestleaveComponent } from './components/requestleave/requestleave.component';


import { RequestListComponent } from './components/requestleave/request-list/request-list.component';
import { EditRequestComponent } from './components/requestleave/edit-request/edit-request.component';
import { AddRequestComponent } from './components/requestleave/add-request/add-request.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
   

    EmployeeComponent,
         HomeComponent,
         EmployeeListComponent,
         AddEmployeeComponent,
         EditEmployeeComponent,
         DesignationComponent,
         AddDesignationComponent,
         EditDesignationComponent,
         DesignationListComponent,
         RequestleaveComponent,
         
         
         RequestListComponent,
        EditRequestComponent,
        AddRequestComponent
                            
         
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
