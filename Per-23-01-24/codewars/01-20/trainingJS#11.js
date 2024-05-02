function filterDolls(dolls) {
  let result = [];

  for (const doll of dolls) {
    if (doll === "Hello Kitty") {
      result.push(doll);
    }
  }

  for (const doll of dolls) {
    if (doll === "Barbie doll") {
      result.push(doll);
      break;
    }
  }

  for (const doll of dolls) {
    if (doll === "Hello Kitty") {
      continue;
    }
    result.push(doll);
  }

  return result;
}