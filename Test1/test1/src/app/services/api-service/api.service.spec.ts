import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { HttpClient} from '@angular/common/http';
import { Employee } from 'src/app/model/employee';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make http client call', ()=>{
    console.log("testing apiservice")
    var empdata = new Employee("raju","makan");
    var ret=service.getBenefitsCost(empdata);
    console.log(ret);
    expect(ret).toBeUndefined();
  })
});
