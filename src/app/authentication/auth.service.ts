import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = "http://139.59.85.179:3000/api/Users/login";
  user = new User;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  setCurrentUser(user) {
    this.currentUserSubject.next(user);
  }
  login(username: string, password: string) {
    this.user.username = username;
    this.user.password = password;
    return this.http.post(this.api, this.user);
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['login']);
  }
}
