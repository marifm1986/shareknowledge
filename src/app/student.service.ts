import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firestore: AngularFirestore) { }

  getStudentById(id: any) {
    return this.firestore.collection('students').doc(id).valueChanges()
  }

  getAllStudents() {
    return this.firestore.collection('students', ref => ref.where('fee', '>', '100').orderBy('fee', 'asc')).snapshotChanges()
  }


  createStudent(student: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('students').add(student).then(() => console.log('success')).catch(err => console.log(err))
    })
  }


  // createStudent(student: Student) {
  //   return new Promise<any>((resolve, reject) => {
  //     this.firestore
  //       .collection('students')
  //       .add(student)
  //       .then(res => { console.log(res) }, err => console.log(err))
  //   })
  // }

  deleteStudent(student: any) {
    return this.firestore.collection('students').doc(student.id).delete();
  }


  updateStudent(student: any, id: string) {
    return this.firestore.collection('students').doc(id).update({
      name: student.name,
      email: student.email,
      student_course: student.student_course,
      fee: student.fee,
    })
  }


}
