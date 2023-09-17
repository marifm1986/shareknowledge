import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StudentService } from './student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knowledge';
  students: Student[] = []
  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  studentForm = this.fb.group({
    name: [''],
    email: [''],
    student_course: [''],
    fee: [''],
  })
  ngOnInit(): void {
    this.getStudents()

  }

  addProduct() {
    const data: any = {
      name: this.studentForm.value.name,
      email: this.studentForm.value.email,
      student_course: this.studentForm.value.student_course,
      fee: this.studentForm.value.fee,
    }
    this.studentForm.reset()
    this.studentService.createStudent(data).then(() => { console.log('success') }).catch((err) => console.log(err))
  }

  getStudents() {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Student
      })
    })
  }

  deleteItem(student: any) {
    this.studentService.deleteStudent(student)
    // if (confirm("are you sure you want to delete" + student.name)) {
    // }
  }

  selectedStudentId!: string;

  onEdit(student: any) {
    this.selectedStudentId = student.id
    this.studentForm.patchValue({
      name: student.name,
      email: student.email,
      student_course: student.student_course,
      fee: student.fee,
    })
  }



  updateStudent() {
    this.studentService.updateStudent(this.studentForm.value, this.selectedStudentId)
    this.studentForm.reset()
    this.selectedStudentId = ''
  }

  studentName(index: any, item: any) {
    return item.id;
  }

}
