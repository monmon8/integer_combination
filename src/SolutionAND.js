const solution = input => {
  const parsedInput = input.split("").filter(character => Number(character));

  if (parsedInput.length === 0) {
    throw new Error("Invalid input - input does not contain numbers");
  }

  let result = [];

  const permutator = (arr, accumulator = []) => {
    if (arr.length === 0) {
      result.push(accumulator.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        const current = arr.slice();
        const next = current.splice(i, 1);
        permutator(current.slice(), accumulator.concat(next));
      }
    }
  };

  permutator(parsedInput);

  return result.sort((a, b) => b - a).join(",");
};

module.exports = solution;
