import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Form } from '@angular/forms';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  employeeForm: FormGroup = new FormGroup({});
  employee : Employee = new  Employee('','');
  dependants : FormArray | undefined ;
  hasDependants: boolean = false;
  totalCost: any | undefined;


  constructor(private formBuilder: FormBuilder, private costService: ApiService){}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      dependants: this.formBuilder.array([ this.createItem() ])
    });
  }

  addDependant():void{
    console.log("add dependants")
    this.dependants= this.employeeForm.get('dependants') as FormArray;
    this.dependants.push(this.createItem());this.hasDependants=true;
  }
	removeDependant(index: number): void {
    const dependants= this.employeeForm.get('dependants') as FormArray;
    dependants.removeAt(index);
  }
  
  private createItem(): FormGroup {
    return this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      relationship: ['']
    });
  }

  getCost(): any{
    console.log("call get cost");
    this.employee.firstName = this.employeeForm.get('firstName')?.value;
    this.employee.lastName= this.employeeForm.get('lastName')?.value;
    
    console.log("getCost", this.employee);
    if (this.employee != null) {
      this.totalCost = this.costService.getBenefitsCost(this.employee);
    } 

    console.log('total benefit cost',this.totalCost);
  }
}

