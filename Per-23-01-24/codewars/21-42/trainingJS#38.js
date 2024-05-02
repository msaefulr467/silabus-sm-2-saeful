function findSimilarity(str, word) {
  const wordsArray = str.split(" ");

  const similarWords = wordsArray.filter((w) => {
    return (
      w.length === word.length &&
      w.startsWith(word.charAt(0)) &&
      w.endsWith(word.charAt(word.length - 1))
    );
  });

  return similarWords.join(" ");
}