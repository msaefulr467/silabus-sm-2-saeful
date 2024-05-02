function firstToLast(str, c) {
  const firstIndex = str.indexOf(c);
  const lastIndex = str.lastIndexOf(c);

  if (firstIndex !== -1 && lastIndex !== -1) {
    return lastIndex - firstIndex;
  } else {
    return -1;
  }
}