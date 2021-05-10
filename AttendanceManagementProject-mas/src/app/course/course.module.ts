import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { UpdateByIdComponent } from './update-by-id/update-by-id.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import {ScrollingModule} from '@angular/cdk/scrolling'
@NgModule({
  declarations: [
    CourseListComponent,
    CreateCourseComponent,
    UpdateByIdComponent,
    DeleteByIdComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
  ],
  exports:[
    CourseListComponent,
    CreateCourseComponent,
    UpdateByIdComponent
  ]
})
export class CourseModule { }
