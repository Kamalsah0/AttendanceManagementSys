export class Course {
    courseId: number;
    courseName: string;
    description:string;
    constructor(courseId:number,courseName: string, description:string)
    {
        this.courseId=courseId;
        this.courseName=courseName;
        this.description=description;
    }
}
