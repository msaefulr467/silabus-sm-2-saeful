function countGrade(scores) {
  const gradeCount = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };

  scores.forEach((score) => {
    if (score === 100) {
      gradeCount.S += 1;
    } else if (score < 100 && score >= 90) {
      gradeCount.A += 1;
    } else if (score < 90 && score >= 80) {
      gradeCount.B += 1;
    } else if (score < 80 && score >= 60) {
      gradeCount.C += 1;
    } else if (score < 60 && score >= 0) {
      gradeCount.D += 1;
    } else if (score === -1) {
      gradeCount.X += 1;
    }
  });

  return gradeCount;
}