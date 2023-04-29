interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Elisha",
  lastName: "Matovu",
  age: 6,
  location: "Kampala",
};

const student2: Student = {
  firstName: "Jerome",
  lastName: "Boteng",
  age: 14,
  location: "Nairobi",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

for (const student of studentsList) {
  const row = table.insertRow();
  const fName = row.insertCell();
  const loc = row.insertCell();
  fName.innerHTML = student.firstName;
  loc.innerHTML = student.location;
}

document.body.appendChild(table);
