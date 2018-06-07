import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
    <h2>Title</h2>
  <ul *ngFor="let costlist of workCost">
    <li>{{costlist.ledgerNumber}}</li>
  </ul>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Output()
  public employees = [];
  public workCost;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployee().subscribe(data => this.employees = data );
    this._employeeService.getWorkCost().subscribe(data => this.workCost = data );

  }

}
