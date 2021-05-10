import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CreateCourseComponent } from './course/create-course/create-course.component';
import { UpdateByIdComponent } from './course/update-by-id/update-by-id.component';
const routes: Routes = [
    {
      path:'courses',component:CourseListComponent
    },
    {
      path:'create-course', component:CreateCourseComponent
    },
    {
      path:'update-course/:courseId',component:UpdateByIdComponent
    },
    {
      path:'',redirectTo:'courses' ,pathMatch:'full'
    }

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
