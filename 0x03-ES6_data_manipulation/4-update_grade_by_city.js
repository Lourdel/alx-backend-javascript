export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const newList = studentsList.filter((studentsList) => (studentsList.location === city));
  return newList.map((newList) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === newList.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return {
      ...newList,
      grade,
    };
  });
}
