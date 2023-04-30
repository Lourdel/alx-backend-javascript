namespace Subjects {
  export class Subject {
    private _teacher: TeacherInterface;

    public setTeacher(teacher: TeacherInterface): void {
      this._teacher = teacher;
    }
  }
}
