function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let pass = 0;
  let fail = 0;
  let finalScore = 0;
  let totalMarks = 0;
  let totalSubjects = marks.length;

  for (let mark of marks) {
    totalMarks += mark;

    if (mark > 40) {
      pass++;
    } else {
      fail++;
    }
  }

  if (totalSubjects > 0) {
    finalScore = Math.round(totalMarks / totalSubjects);
  } else {
    finalScore = 0;
  }

  return { finalScore, pass, fail };
}
