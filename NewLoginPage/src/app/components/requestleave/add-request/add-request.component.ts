import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { requestleave } from 'src/app/model/requestleave.model';
import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  addLeaveRequest: requestleave={
    id: 0,
    empId: '',
    empName: '',
    from: undefined,
    to: undefined,
    cause: ''
  }

  constructor(private leaveService : RequestleaveService, private router: Router) { }

  ngOnInit(): void {
  }

  addLeave(){
    this.leaveService.addRequestleave(this.addLeaveRequest)
    .subscribe({
      next:(requestleave)=>{
        this.router.navigate(['lev']);
      }
    })
  }

}
