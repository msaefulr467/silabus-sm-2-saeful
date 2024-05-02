function whatNumberIsIt(n) {
  if (isNaN(n)) {
    if (isNaN(parseInt(n))) {
      return "Input number is Number.NaN";
    } else {
      return "Input number is " + n;
    }
  }

  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else {
    return "Input number is " + n;
  }
}