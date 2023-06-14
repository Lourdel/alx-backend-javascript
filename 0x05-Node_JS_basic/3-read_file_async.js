const fs = require('fs');

const countStudents = (path) => {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let csStudents = [];
        const fields = [];
        let message;
        const returnMsgs = [];
        const dataObj = data.toString().trim().split('\n');
        const listCreate = (val) => val.trim().split(',');
        const new_obj = dataObj.map(listCreate);
        message = `Number of students: ${new_obj.length - 1}`;
        returnMsgs.push(message);
        console.log(message);
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
            message = `Number of students in ${uniqueFields[x]}: ${csStudents.length}. List: ${csStudents.join(', ')}`;
            returnMsgs.push(message);
            console.log(message);
            csStudents = [];
          }
        }
        resolve(returnMsgs);
      }
    });
  };
  return new Promise(promise);
};

module.exports = countStudents;
