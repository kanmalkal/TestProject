import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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
@ViewChild('firstName', {static: true}) firstName : ElementRef | undefined;
@ViewChild('lastName', {static: true}) lasttName : ElementRef | undefined;

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
