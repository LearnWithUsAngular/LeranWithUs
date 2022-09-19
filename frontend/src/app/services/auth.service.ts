import { Injectable } from '@angular/core';
import { retry, catchError, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  constructor(private http: HttpClient) { }

  /**
   * user login service.
   * @param email 
   * @param password 
   * @returns 
   */
  login(email: string, password: string) {
    const data = {
      "email": email,
      "password": password
    }

    return this.http.post(environment.apiUrl + '/login', data)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  /**
   * signup service.
   * @param fullName 
   * @param email 
   * @param password 
   * @returns 
   */
  signup(fullName: string, email: string, password: string) {
    const body = {
      "fullName": fullName,
      "email": email,
      "password": password
    }

    return this.http.post(environment.apiUrl + '/signup', body)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  /**
   * logout service.
   * @returns 
   */
  logout() {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('token');
    localStorage.removeItem('loginUser');
    const data = {};
    return this.http.post(environment.apiUrl + '/logout', data)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  /**
   * http error handler.
   * @param error 
   * @returns 
   */
  private httpErrorHandler(error: HttpErrorResponse) {

    if (error.error instanceof HttpErrorResponse) {
      console.error("A client side error occured. The error message is " + error.message);
    } else {
      alert("Username, password wrong.");
      console.error("A server side error occured. The error message is " + error.message);
    }
    return throwError("Error occured.");
  }

forgetPassword(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/forgot-password`, payload).pipe(retry(3));
  }

  resetPasswordUpdate(id: string, token: string, payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/password-reset-update/${id}/${token}`, payload).pipe(retry(3));
  }
}
