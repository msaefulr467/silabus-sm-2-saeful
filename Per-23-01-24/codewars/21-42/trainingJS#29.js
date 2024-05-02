function bigToSmall(arr) {
  const flatArr = [].concat(...arr); // Meratakan array 2D
  const sortedArr = flatArr.sort((a, b) => b - a); // Mengurutkan dalam urutan menurun
  const result = sortedArr.join(">"); // Menghubungkan elemen dengan ">"

  return result;
}