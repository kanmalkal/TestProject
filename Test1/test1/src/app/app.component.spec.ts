import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatHint, MatLabel } from '@angular/material/form-field';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeNameComponent } from './components/employee-name/employee-name.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ApiService } from './services/api-service/api.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
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
      providers: [ApiService]
    }).compileComponents();
  });
  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test1'`, () => {
    expect(component.title).toEqual('test1');
  });

  it(`should have as header and footer tags`, () => {
    const appHeader= fixture.debugElement.nativeElement.querySelector('app-header');
    expect(appHeader).toBeDefined();
  });
});
