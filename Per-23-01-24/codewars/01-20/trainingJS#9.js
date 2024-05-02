function padIt(str, n) {
  let counter = 1;
  while (counter <= n) {
    if (counter % 2 != 0) str = "*" + str;
    if (counter % 2 == 0) str += "*";
    counter++;
  }
  return str;
}