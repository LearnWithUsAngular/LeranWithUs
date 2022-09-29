import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CourseServiceService } from '../services/course-service.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<boolean> {
  constructor(public courseSvc : CourseServiceService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const paramId = route.params['id'];
    return this.courseSvc.findCourse(paramId);
  }
}
