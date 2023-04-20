export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('name must be a string, length a number and students an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') throw TypeError('length must be a number');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    for (const el of students) {
      if (typeof el !== 'string') { throw TypeError('students must contain strings'); }
    }
    this._students = students;
  }
}
