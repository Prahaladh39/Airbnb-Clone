function add(a, b) {
    if (!student || !student.marks || student.marks.length === 0) {
    return { success: false, message: "Invalid student data" };
  }

  let total = 0;
  let failedSubjects = 0;

  for (let i = 0; i < student.marks.length; i++) {
    let mark = student.marks[i];

    if (mark < 0 || mark > 100) {
      return { success: false, message: "Invalid marks detected" };
    }

    total += mark;

    if (mark < 35) {
      failedSubjects++;
    }
  }

  let average = total / student.marks.length;
  let status = failedSubjects > 0 ? "FAIL" : "PASS";
  let grade;

  if (average >= 85) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 55) grade = "C";
  else grade = "D";

  return {
    success: true,
    totalMarks: total,
    averageMarks: average,
    grade: grade,
    status: status,
    failedSubjects: failedSubjects
  };


}
