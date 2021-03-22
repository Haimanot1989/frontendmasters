function printRecords(recordIds) {
  var studentsToPrint = [];

  recordIds.forEach(studentId => {
    studentsToPrint.push(
      studentRecords.find(student => {
        return student.id == studentId;
      })
    );
  });

  studentsToPrint.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  studentsToPrint.forEach(student => {
    console.log(
      `${student.name}(${student.id}): ${student.paid ? "Paid" : "Not Paid"}`
    );
  });
}

function paidStudentsToEnroll() {
  var toBeEnrolled = [];
  function nonEnrolledStudentIds() {
    studentRecords.forEach(student => {
      if (student.paid && !currentEnrollment.includes(student.id)) {
        toBeEnrolled.push(student.id);
      }
    });
  }
  nonEnrolledStudentIds();

  return [...currentEnrollment, ...toBeEnrolled];
}

function remindUnpaid(recordIds) {
  // TODO
  var unpaidStudents = [];
  recordIds.forEach(sId => {
    let student = studentRecords.find(student => {
      return student.id == sId && !student.paid;
    });
    if (student) {
      unpaidStudents.push(student.id);
    }
  });

  printRecords(unpaidStudents);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false }
];

// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
