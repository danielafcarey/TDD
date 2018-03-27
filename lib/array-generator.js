const arrayGenerator = arrayLength => {
  let generatedArray = []

  for (let i = 0; i < arrayLength; i++) {
    generatedArray.push(Math.floor(Math.random() * 100))
  }

  return generatedArray;
}

module.exports = arrayGenerator;