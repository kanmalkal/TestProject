import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmptyError, Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Employee } from 'src/app/model/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http: HttpClient;
  private apiUrl: string = "https://localhost:5001/api";
  constructor(private httpClient: HttpClient) { 
      this.http= httpClient;
  }

    
  public getBenefitsCost(employee: Employee) : any {
   
    const body = { employee: JSON.stringify(employee) };
    const headers= new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', '*')
    .set('Content-Type', 'application/json');
    var uri = this.apiUrl + '/cost/';
    var url =encodeURI(uri);
    console.log(body);
    // This is not working correctly... 
    this.http.post(url, body, {'headers':headers})
    .subscribe(
      (data) => {
        console.log(data);
        return data;
      },
      err=>console.log(err));
  }
}
