import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
   <h3>
      Department List
    </h3>
    <ul class="items">
       <li [class.selected]="isSelected(department)" (click)="onSelect()" *ngFor="let department of departments">
           {{department.id}} {{department.name}}<br>
       </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
public selectedId;
  public departments =[
{"id":1,"name":"Angular"},
{"id":2,"name":"Node"},
{"id":3,"name":"Java"},
{"id":4,"name":"MangoDB"},
{"id":5,"name":"Bootstrap"}
  ]
  public departmentId;

  constructor(private router : Router,private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId= id;
    });
  }



  onSelect(department){
    this.router.navigate(['/departments',department.id]);
  }

isSelected(department){
  return department.id === this.selectedId;
}


 
}
