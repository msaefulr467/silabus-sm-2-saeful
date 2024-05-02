function howManySmaller(arr, n) {
  // Misi pertama: Biarkan semua elemen dalam array memiliki dua tempat desimal
  const formattedArr = arr.map((element) => parseFloat(element.toFixed(2)));

  // Misi kedua: Hitung jumlah elemen yang lebih kecil dari n
  const count = formattedArr.reduce(
    (acc, element) => (element < n ? acc + 1 : acc),
    0
  );

  return count;
}