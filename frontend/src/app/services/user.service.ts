import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  token!: string;

  ngOnInit(): void {
     this.token = localStorage.getItem('token') || '';
  }
  headerOptions = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`);
  options = { headers: this.headerOptions };

  createAccount(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/signup`, payload).pipe(retry(3));
  }

  getUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/getUser`, this.options);
  }

  findUser(userId: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/` + userId);
  }
}
