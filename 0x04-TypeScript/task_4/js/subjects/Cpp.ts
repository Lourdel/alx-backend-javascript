/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      const expernc = this.teacher.experienceTeachingC;

      if (expernc && expernc > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      else {
        return "No available teacher";
      }
    }
  }
}
