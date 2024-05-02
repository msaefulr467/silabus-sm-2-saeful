function alienLanguage(str) {
  // Split the sentence into words
  const words = str.split(" ");

  // Process each word in the sentence
  const alienWords = words.map((word) => {
    // Convert the word to uppercase
    const uppercasedWord = word.toUpperCase();

    // Get the last letter of the word and convert it to lowercase
    const lastLetterLowercased = uppercasedWord.slice(-1).toLowerCase();

    // Combine the uppercase word (excluding the last letter) with the lowercased last letter
    const alienWord = uppercasedWord.slice(0, -1) + lastLetterLowercased;

    return alienWord;
  });

  // Join the alien words back into a sentence
  const result = alienWords.join(" ");

  return result;
}