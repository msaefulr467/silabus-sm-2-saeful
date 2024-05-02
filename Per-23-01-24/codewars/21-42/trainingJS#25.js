function sortIt(arr) {
  const countMap = new Map();

  // Menghitung jumlah kemunculan setiap elemen
  arr.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  // Mengurutkan array berdasarkan kondisi yang ditentukan
  const sortedArr = arr.slice().sort((a, b) => {
    if (countMap.get(a) !== countMap.get(b)) {
      return countMap.get(a) - countMap.get(b);
    } else {
      return b - a;
    }
  });

  return sortedArr;
}