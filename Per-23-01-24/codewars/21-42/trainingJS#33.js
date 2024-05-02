function maxMin(arr1, arr2) {
  const differences = arr1.map((num1, index) => Math.abs(num1 - arr2[index]));
  const maxValue = Math.max(...differences);
  const minValue = Math.min(...differences);

  return [maxValue, minValue];
}