function isolateIt(arr) {
  return arr.map((str) => {
    const midIndex = Math.floor(str.length / 2);

    if (str.length % 2 === 0) {
      // Panjang string genap, gunakan metode penyisipan
      return str.slice(0, midIndex) + "|" + str.slice(midIndex);
    } else {
      // Panjang string ganjil, gunakan metode penggantian
      return str.slice(0, midIndex) + "|" + str.slice(midIndex + 1);
    }
  });
}