import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8000/api/users'
  constructor(private http: HttpClient) { }

  postRegister(data: any)
  {
    return this.http.post(`${this.baseUrl}`, data);
  }

  postLogin(data: any)
  {
    return this.http.post(`${this.baseUrl}`, data);
  }




}
