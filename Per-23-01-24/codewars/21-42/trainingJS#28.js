function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentNumber = arr[i].toString();
    const nextNumber = arr[i + 1].toString();

    if (currentNumber === nextNumber.split("").reverse().join("")) {
      return [parseInt(currentNumber), parseInt(nextNumber)];
    }
  }

  return [-1, -1];
}