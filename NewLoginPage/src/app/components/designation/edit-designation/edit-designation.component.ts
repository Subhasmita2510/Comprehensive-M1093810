import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/model/designation.module';
import { DesignatioService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {

  designationDetails: Designation={
    id: 0,
    designationName: '',
    roleName: '',
    department: ''
  };

  constructor(private route: ActivatedRoute, private designationService : DesignatioService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id= params.get('id');
        if(id){
          this.designationService.getDesignation(id)
          .subscribe({
            next:(response)=>{
              this.designationDetails=response;
            }
          });
        }
      }
    })
  }

  updateDesignation(){
    this.designationService.updateDesignation(this.designationDetails.id, this.designationDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['deg']);
      }
    });
  }

  deleteDesignation(id:number){
    this.designationService.deleteDesignation(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['deg']);
      }
    })
  }
}