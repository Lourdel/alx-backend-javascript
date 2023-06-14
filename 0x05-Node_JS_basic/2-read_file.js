const fs = require('fs');

const countStudents = (path) => {
  let csStudents = [];
  const fields = [];
  try {
    const data = fs.readFileSync(path)
    const dataObj = data.toString().trim().split('\n');
    const listCreate = (val) => val.trim().split(',');
    const new_obj = dataObj.map(listCreate);
    console.log(`Number of students: ${new_obj.length - 1}`);
    for (let i = 0; i < new_obj.length; i += 1) {
      fields.push(new_obj[i][3]);
    }
    fields.shift();
    const uniqueFields = [...new Set(fields)];
    for (const x in uniqueFields) {
      if (Object.prototype.hasOwnProperty.call(uniqueFields, x)) {
        for (let i = 0; i < new_obj.length; i += 1) {
          if (new_obj[i].includes(uniqueFields[x])) {
            csStudents.push(new_obj[i][0]);
          }
        }
        console.log(`Number of students in ${uniqueFields[x]}: ${csStudents.length}. List: ${csStudents.join(', ')}`);
        csStudents = [];
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
