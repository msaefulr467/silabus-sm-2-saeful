function splitAndMerge(string, separator) {
  // Split the string into words by spaces
  const words = string.split(" ");

  // Split each word into separate characters and join them back with the specified separator
  const resultWords = words.map((word) => word.split("").join(separator));

  // Join all the resulting "words" back into a sentence with spaces
  const result = resultWords.join(" ");

  return result;
}