export default function getStudentIdsSum(studentsList) {
  const studentId = studentsList.map((studentsList) => studentsList.id);
  return studentId.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
