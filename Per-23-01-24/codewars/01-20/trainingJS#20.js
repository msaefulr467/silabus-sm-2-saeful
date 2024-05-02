const topSecret = (str) =>
  str.replace(/[a-z]/gi, (c) =>
    String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3))
  );

//question1: The top secret file number is...
answer1 = "1850";
//question2: Super agent's name is...
answer2 = "fQT";
//question3: He stole the treasure is...
answer3 = "Train tire";