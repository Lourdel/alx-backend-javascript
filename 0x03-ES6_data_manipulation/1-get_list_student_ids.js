export default function getListStudentIds(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.map((studentsList) => studentsList.id);
}
