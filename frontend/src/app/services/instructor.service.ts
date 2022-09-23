import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }
  token!: string;

  ngOnInit(): void {
     this.token = localStorage.getItem('token') || '';
  }
  headerOptions = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`);
  options = { headers: this.headerOptions };

  /**
   * get instructors.
   * @returns 
   */
  getInstructors(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/instructors`, this.options).pipe(retry(1));
  }
}
