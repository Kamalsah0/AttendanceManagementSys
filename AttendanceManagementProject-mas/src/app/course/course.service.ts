import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL="http://localhost:9090/Course";
 
  constructor(private httpClient:HttpClient) { }

  getCourseList():Observable<Course[]>
  {
    return this.httpClient.get<Course[]>(`${this.baseURL}/getAllCourse`);
  }
  createCourse(course:Course):Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/addCourse`,course);
  }
  getCourseById(courseId:number):Observable<Course>
  {
    return this.httpClient.get<Course>(`${this.baseURL}/getByCourseId/${courseId}`)
  }
  updateCourse(courseId:number,course:Course):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/updateCourse/${courseId}`,course);
  }
  deleteCourse(courseId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/deleteByCourseId/${courseId}`,{responseType:'text'})
  }
}
