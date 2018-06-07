import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  @Output()
  public employees = [];
  public costLists;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    // this._employeeService.getEmployee().subscribe(data => this.employees = data );
    this._employeeService.getWorkCost().subscribe(data => this.costLists = data );

  }

}
