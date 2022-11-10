import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee={
    id: 0,
    empId: '',
    empName: '',
    phone: '',
    email: '',
    address: '',
    designation: '',
    salaryGrade: ''
  }

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>{
        this.router.navigate(['emp']);
      }
    })
  }

}
