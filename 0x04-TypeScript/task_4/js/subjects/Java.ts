/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    getAvailableTeacher(): string {
      const expc = this.teacher.experienceTeachingJava;
      return expc > 0 ? `Available Teacher: ${this.teacher.firstName}` : "No available teacher";
    }
  }
}
