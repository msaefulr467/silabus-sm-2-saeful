function rndCode() {
  const uppercaseLetters = "ABCDEFGHIJKLM";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*";

  const getRandomChar = (charSet) =>
    charSet[Math.floor(Math.random() * charSet.length)];

  const code =
    getRandomChar(uppercaseLetters) +
    getRandomChar(uppercaseLetters) +
    numbers[getRandomChar(numbers)] +
    numbers[getRandomChar(numbers)] +
    numbers[getRandomChar(numbers)] +
    numbers[getRandomChar(numbers)] +
    getRandomChar(symbols) +
    getRandomChar(symbols);

  return code;
}