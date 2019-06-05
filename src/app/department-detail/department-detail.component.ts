import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from'@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-department-detail',
  template: `
  
    <p>
    you selected the  department-detail with id = {{departmentId}}
    </p>
    <button (click)="goNext()">Next</button><br>
    <button (click)="goPrevious()">Previous</button>

    <div>
    <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  
  constructor(private activatedRouter : ActivatedRoute, private router : Router) { }

  ngOnInit() {
this.activatedRouter.paramMap.subscribe((params:ParamMap)=>{
let id = parseInt(params.get('id'));
this.departmentId= id;
});

  }
  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments',previousId]);

  }
  goNext(){
    let nextId  =  this.departmentId + 1;
    this.router.navigate(['/departments',nextId]);

  }
  gotoDepartments(){
    let selectedId= this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments',{id:selectedId}]);

  }
}
