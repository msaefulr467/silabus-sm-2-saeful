function threeInOne(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i += 3) {
    const sum = (arr[i] || 0) + (arr[i + 1] || 0) + (arr[i + 2] || 0);
    result.push(sum);
  }

  return result;
}