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
     this.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiQyYiQxMiRwOXRzUHFVd0RON3dLLzhXdXZpNlZlek8wNW1LbGc2V2NQU1ZGQWpvVEZDRXlzM3hieThlVyIsImlkIjoiJDJiJDEyJEtoSzJkV3ZFSGJia0o5WjVGTTZzNGVhT3QxUmZrUHFBd3RRVE9UNThsSjNuRmhzSlNsVVlLIiwiaWF0IjoxNjYyOTU1NTE5LCJleHAiOjE2NjMwNDE5MTl9.JqEAFzlctKDRDr4wi9mHICT8-Mfm5eldwDgjZUrUB4g";
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
}
