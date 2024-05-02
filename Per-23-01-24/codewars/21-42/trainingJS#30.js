function tailAndHead(arr) {
  const result = arr.reduce((acc, num, index, array) => {
    if (index < array.length - 1) {
      const currentTail = +num.toString().slice(-1); // Ekornya
      const nextHead = +array[index + 1].toString().charAt(0); // Kepalanya
      acc *= currentTail + nextHead;
    }
    return acc;
  }, 1);

  return result;
}