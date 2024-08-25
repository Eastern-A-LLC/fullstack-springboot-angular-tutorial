import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/v1/employees";
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }
}
