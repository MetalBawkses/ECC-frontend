import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {IMatcost} from './matcost';

@Injectable({
  providedIn: 'root'
})
export class TestFormServiceService {

  private static readonly POST_CUSTOMER_URL = '/api/post/customer';
  private static readonly POST_MATCOST_URL = '/api/post/newmatcost';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createNumber(someNumber: any): Observable<any> {
    return this.http.post(TestFormServiceService.POST_CUSTOMER_URL, someNumber, {headers: this.headers});
  }

  createMatCost(matcost: IMatcost): Observable<any> {
    return this.http.post(TestFormServiceService.POST_MATCOST_URL, matcost, {headers: this.headers});
  }
}
