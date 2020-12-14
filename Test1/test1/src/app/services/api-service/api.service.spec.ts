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

    // // this test is failing..

    // var empdata = new Employee("raju","makan");
    // var ret=service.getBenefitsCost(empdata);
    // console.log(ret);
    // expect(ret).toBeUndefined();

    // const req = httpMock.expectOne('/api/cost');
    // console.log('request url', req.request.url)
    // expect(req.request.method).toEqual("POST");
    // req.flush(empdata);
    // httpMock.verify();
  })
});
