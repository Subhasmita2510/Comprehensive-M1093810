import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employees');
  }

  addEmployee(addEmployeeRequest: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl+'/api/Employees', addEmployeeRequest);
  }

  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/Employees/'+id);
  }
  updateEmployee(id:number, updateEmployeeRequest: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/api/Employees/'+ id, updateEmployeeRequest);

  }

  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/api/Employees/'+id);
  }
}
