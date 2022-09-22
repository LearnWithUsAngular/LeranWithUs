import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient) { }

  ngOnInit(): void { }

  public getCategory(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/categories`);
  }

  public createCategory(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/categories`, payload);
  }

  findCategory(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/categories/` + id);
  }

  public updateCategory(payload: any, id: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/categories/` + id, payload);
  }

  public deleteCategory(id: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/categories/` + id);
  }

}
