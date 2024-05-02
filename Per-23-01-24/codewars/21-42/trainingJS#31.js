function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  }

  const contains5 = arr.includes(5);
  const contains13 = arr.includes(13);

  return contains5 && contains13 ? "It's a black array" : "It's a white array";
}