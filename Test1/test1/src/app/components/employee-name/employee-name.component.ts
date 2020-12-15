import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.css']
})
export class EmployeeNameComponent implements OnInit, OnDestroy {
@Input() data : Employee =new Employee('','');
@Input() index = 0;

form: FormGroup = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
});
  constructor(public parent: FormGroupDirective) {
   }

  ngOnInit(): void {
    this.form = this.parent.form;
    const firstName = new FormControl(this.data.firstName, []);
    const lastName = new FormControl(this.data.lastName, []);
    this.form.addControl('firstName', firstName);
    this.form.addControl('lastName', lastName);
  }

  ngOnDestroy(){
    this.form.removeControl('firstName');
    this.form.removeControl('lastName');
  }

}
