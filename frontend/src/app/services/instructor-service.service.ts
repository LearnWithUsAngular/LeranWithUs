import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { instructor } from '../constants/learn';

@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {

  constructor(public http: HttpClient) { }


  public getInstructors(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/instructors`);
  }

  public createInstructor(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/instructors`, payload);
  }

  public findInstructor(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/instructors/` + id);
  }

  public updateInstructor(payload: any, id: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/instructors/` + id, payload);
  }

  public deleteInstructor(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/instructors/` + id);
  }
}
