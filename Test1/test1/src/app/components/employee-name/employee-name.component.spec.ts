import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Directive, Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatLabel, MatHint, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';

import { EmployeeNameComponent } from './employee-name.component';

describe('EmployeeNameComponent', () => {
  let component: EmployeeNameComponent;
  let fixture: ComponentFixture<EmployeeNameComponent>;
  let formGroupDirective:FormGroupDirective;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          ReactiveFormsModule
      ],
      declarations: [
        EmployeeNameComponent,
        MatLabel
      ],
      providers: [ FormGroupDirective,
        { provide: ControlContainer, useValue: formGroupDirective }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(EmployeeNameComponent);
    component = fixture.componentInstance;

    //mock parent formGroup
    const mockFormGroup: FormGroup = new FormGroup({
    });

    //dummy formgroupDirective to avoid undefined addControl function
    const formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);
    
    component.parent.form = mockFormGroup;
    component.ngOnInit();
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have First Name label mat-label element', () => {
    const label= fixture.debugElement.nativeElement.querySelector('mat-label');
    expect(label.innerHTML).toContain('First Name');
  });
  it('should have First Name input must have name attribute firstName', () => {
    const firstnameInput = fixture.debugElement.nativeElement.querySelector('input');
    var elemattribute = firstnameInput.getAttribute('name');
    expect(elemattribute).toContain('firstName');
  });
});
