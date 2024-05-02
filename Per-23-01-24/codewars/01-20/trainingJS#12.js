function giveMeFive(obj) {
  const result = [];

  for (const key in obj) {
    if (key.length === 5) {
      result.push(key);
    }

    const value = obj[key];
    if (value.length === 5) {
      result.push(value);
    }
  }

  return result;
}