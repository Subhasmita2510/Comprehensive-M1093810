import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee={
    id: 0,
    empId: '',
    empName: '',
    phone: '',
    email: '',
    address: '',
    designation: '',
    salaryGrade: ''
  };

  constructor(private route: ActivatedRoute, private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id= params.get('id');
        if(id){
          this.employeeService.getEmployee(id)
          .subscribe({
            next:(response)=>{
              this.employeeDetails=response;
            }
          });
        }
      }
    })
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['emp']);
      }
    });
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['emp']);
      }
    })
  }
}
