import { Component, OnInit } from '@angular/core';
import { requestleave } from 'src/app/model/requestleave.model';

import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
 leave: requestleave[]=[];

  constructor(private leaveService : RequestleaveService) { }

  ngOnInit(): void {
    this.leaveService. getAllRequestleave()
    .subscribe({
      next:(leave)=>{
        this.leave=leave;
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
}
