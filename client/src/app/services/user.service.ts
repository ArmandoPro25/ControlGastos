import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/user'; 

  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URI}`);
  }

  getUser(IdUsuario: string): Observable<any> {
    return this.http.get(`${this.API_URI}/${IdUsuario}`);
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(`${this.API_URI}`, user);
  }
}
