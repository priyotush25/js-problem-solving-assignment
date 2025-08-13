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
    totalMarks = totalMarks + mark;

    if (mark > 40) {
      pass++;
    } else {
      fail++;
    }
  }

  finalScore = Math.round(totalMarks / totalSubjects);

  let result = {
    finalScore: finalScore,
    pass: pass,
    fail: fail,
  };

  return result;
}

console.log(resultReport(100));
