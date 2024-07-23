import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URI = 'http://localhost:3000/user'; 

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    return this.http.post(this.API_URI, user);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URI}`);
  }
}
