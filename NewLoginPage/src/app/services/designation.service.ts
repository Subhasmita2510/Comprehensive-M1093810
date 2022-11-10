import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Designation } from '../model/designation.module';

@Injectable({
  providedIn: 'root'
})
export class DesignatioService {
  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllDesignation():Observable<Designation[]>{
    return this.http.get<Designation[]>(this.baseApiUrl+'/api/Designations');
  }

  addDesignation(addDesignationRequest: Designation):Observable<Designation>{
    return this.http.post<Designation>(this.baseApiUrl+'/api/Designations', addDesignationRequest);
  }

  getDesignation(id:string):Observable<Designation>{
    return this.http.get<Designation>(this.baseApiUrl+'/api/Designations/'+id);
  }
  updateDesignation(id:number, updateEmployeeRequest: Designation): Observable<Designation>{
    return this.http.put<Designation>(this.baseApiUrl+'/api/Designations/'+ id, updateEmployeeRequest);

  }

  deleteDesignation(id:number):Observable<Designation>{
    return this.http.delete<Designation>(this.baseApiUrl+'/api/Designation/'+id);
  }
}
