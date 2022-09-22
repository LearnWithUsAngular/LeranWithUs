import { Injectable } from '@angular/core';
import { retry, catchError, throwError, Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn: boolean = false;
  protected authUserSubject = new Subject<any>();
  authUser$: Observable<any> = this.authUserSubject.asObservable();
  constructor(private http: HttpClient) { }

  /**
   * is login.
   */
  async isLoggedIn() {
    if (localStorage.getItem('userLoginData')) {
      await this.authUserSubject.next(localStorage.getItem('userLoginData'));
    } else {
      await this.authUserSubject.next(null);
    }
  }

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
    };

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
    const data = {};
    return this.http.post(environment.apiUrl + '/logout', data)
      .pipe(retry(3), catchError(this.httpErrorHandler));
  }

  /**
   * forget password service.
   * @param payload 
   * @returns 
   */
  forgetPassword(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/forgot-password`, payload).pipe(retry(3), catchError(this.httpErrorHandler));
  }

  /**
   * reset password service.
   * @param id 
   * @param token 
   * @param payload 
   * @returns 
   */
  resetPasswordUpdate(id: string, token: string, payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/password-reset-update/${id}/${token}`, payload).pipe(retry(3), catchError(this.httpErrorHandler));
  }

  /**
   * password change service.
   * @param id 
   * @param payload 
   * @returns 
   */
  passwordChange(id: string, payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/password-change/${id}`, payload).pipe(retry(3));
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
}
