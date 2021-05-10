import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  addCourseForm=new FormGroup(
    {
      courseName:new FormControl('',Validators.required),
      discription:new FormControl('',[Validators.required,Validators.minLength(10)])
    }
  )
  
  course: Course = new Course(0, '', '');

  constructor(private courseService: CourseService, private router: Router) {
  }
 

  ngOnInit(): void {
  }
  saveCourse() {
    this.courseService.createCourse(this.course).subscribe(data => {
      console.log(data);
      this.goToCourseList();
    },
      error => console.log(error));
  }
  goToCourseList() {
    this.router.navigate(['/courses']);
  }

  // onSubmit() {
  //   console.log(this.course)
  //   this.saveCourse()
  // }
  onSubmit()
  {
    console.warn(this.addCourseForm.value)
    this.saveCourse()
    this.addCourseForm.reset();
  }
  get courseName()
  {
    return this.addCourseForm.get('courseName')
  }
  get discription()
  {
    return this.addCourseForm.get('discription')
  }

  goToAddCourse()
{
  this.router.navigate(['create-course'])
}
goToCourses()
{
  this.router.navigate(['courses'])
}
}
