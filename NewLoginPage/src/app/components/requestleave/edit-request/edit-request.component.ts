import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { requestleave } from 'src/app/model/requestleave.model';
import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
  leaveDetails: requestleave={
    id: 0,
    empId: '',
    empName: '',
    from: undefined,
    to: undefined,
    cause: ''
  };

  constructor(private route: ActivatedRoute, private leaveService : RequestleaveService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id= params.get('id');
        if(id){
          this.leaveService.getRequestleave(id)
          .subscribe({
            next:(response)=>{
              this.leaveDetails=response;
            }
          });
        }
      }
    })
  }

  updateLeave(){
    this.leaveService.updateRequestleave(this.leaveDetails.id, this.leaveDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['lev']);
      }
    });
  }

  deleteLeave(id:number){
    this.leaveService.deleteRequestleave(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['lev']);
      }
    })
  }


}
