import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatLabel, MatHint } from '@angular/material/form-field';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { ApiService } from 'src/app/services/api-service/api.service';
import { EmployeeNameComponent } from '../employee-name/employee-name.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from './main.component';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let httpClient: HttpClient;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule

      ],
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        MainComponent,
        EmployeeNameComponent,
        MatLabel,
        MatHint
      ],
      providers:[ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    httpClient = TestBed.inject(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
