import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { requestleave } from '../model/requestleave.model';

@Injectable({
  providedIn: 'root'
})
export class RequestleaveService {
  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllRequestleave():Observable<requestleave[]>{
    return this.http.get<requestleave[]>(this.baseApiUrl+'/api/Requestleaves');
  }

  addRequestleave(addRequestleaveRequest: requestleave):Observable<requestleave>{
    return this.http.post<requestleave>(this.baseApiUrl+'/api/Requestleaves', addRequestleaveRequest);
  }

  getRequestleave(id:string):Observable<requestleave>{
    return this.http.get<requestleave>(this.baseApiUrl+'/api/Requestleaves/'+id);
  }
  updateRequestleave(id:number, updateRequestleaveRequest: requestleave): Observable<requestleave>{
    return this.http.put<requestleave>(this.baseApiUrl+'/api/Requestleaves/'+ id, updateRequestleaveRequest);

  }

  deleteRequestleave(id:number):Observable<requestleave>{
    return this.http.delete<requestleave>(this.baseApiUrl+'/api/Requestleaves/'+id);
  }
}
