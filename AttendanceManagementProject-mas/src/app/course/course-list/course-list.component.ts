import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import {CourseService} from '../course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  course: Course[]=[];
  orgin_list: Course[]=[];
  listFilter: string='';

  constructor(private courseService:CourseService, 
    private router:Router) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses()
  {
    this.courseService.getCourseList().subscribe(data=>{
      this.course = data;
      this.orgin_list=data;
    });
  }
  updateCourse(courseId:number)
  {
    this.router.navigate(['update-course',courseId])
  }
  deleteCourse(courseId:number)
  {
    this.courseService.deleteCourse(courseId).subscribe(data=>
      {
        alert("deleted successfully");
        location.reload();
        
      });
  }
  filter_course(){
    if(this.listFilter){
      this.course = [];
      for(let c of this.orgin_list){
        if('' + c.courseId==this.listFilter||c.courseName.toLowerCase().includes(this.listFilter.toLowerCase())){
          this.course.push(c)
        }
      } 
    }
    else{
      this.course=this.orgin_list;
    }
}
goToAddCourse()
{
  this.router.navigate(['create-course'])
}
}
