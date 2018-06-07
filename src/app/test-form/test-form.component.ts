import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { TestFormServiceService} from '../test-form-service.service';
import {IMatcost} from '../matcost';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  someNumber: number;
  someNumber2: number;
  someNumber3: number;
  someNumber4: number;
  matcost: IMatcost = {product: 123456, matCostValue: 2, yearMonth: 201801, selfProducedMaterialCost: 4};
  constructor(private testFormService: TestFormServiceService) { }

  ngOnInit() {
  }

  onSubmit() {

    this.testFormService.createNumber(this.someNumber).subscribe(
      value => {
        console.log('POST create number successfully', value);
      }, error1 => {
        console.log('FAIL to create number');
      },
      () => {
        console.log('POST number completed.');
      });
  }

  submitMatcost() {
    console.log(this.matcost);
    this.testFormService.createMatCost(this.matcost).subscribe(
      value => {
        console.log('POST create matcost successfully', value);
      }, error2 => {
        console.log('FAIL to create matcost');
      },
      () => {
        console.log('POST matcost completed.');
      });
  }
}
