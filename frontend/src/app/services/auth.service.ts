import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  forgetPassword(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/forgot-password`, payload).pipe(retry(3));
  }

  resetPasswordUpdate(id: string, token: string, payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/password-reset-update/${id}/${token}`, payload).pipe(retry(3));
  }
}
