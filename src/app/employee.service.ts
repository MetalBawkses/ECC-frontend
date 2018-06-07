import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from './employee';
import {Observable} from 'rxjs';
import {ICostlist} from './costlist';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private _url = '/assets/data/employees.json';
  private apiAddress = 'http://localhost:8080/lofasz'
  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  getWorkCost(): Observable<ICostlist[]> {

    return this.http.get<ICostlist[]>(this.apiAddress);
  }

}
