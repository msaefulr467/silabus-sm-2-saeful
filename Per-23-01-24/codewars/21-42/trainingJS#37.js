function countAnimals(animals, count) {
  const animalList = animals.split(",");
  const result = count.map(
    (animal) => animalList.filter((a) => a === animal).length
  );
  return result;
}