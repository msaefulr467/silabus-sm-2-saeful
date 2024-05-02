function shuffleIt(arr, ...swapIndices) {
  for (const indices of swapIndices) {
    const [index1, index2] = indices;
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  return arr;
}

// Contoh penggunaan:
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2])); // Output: [1,3,2,4,5]
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])); // Output: [1,3,2,5,4]
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])); // Output: [1,3,5,2,4]