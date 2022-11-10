import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/model/designation.module';
import { DesignatioService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent implements OnInit {

  designation: Designation[]=[];

  constructor(private designationService : DesignatioService) { }

  ngOnInit(): void {
    this.designationService.getAllDesignation()
    .subscribe({
      next:(designation)=>{
        this.designation=designation;
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

}