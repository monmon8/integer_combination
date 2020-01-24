const solution = require("../SolutionAND");

describe("Permutator", () => {
  it("Throws an error if the input is invalid", () => {
    expect(() => solution("abc")).toThrowError(
      "Invalid input - input does not contain numbers"
    );
  });

  it("generates all the cobinations of the provided integers", () => {
    expect(solution("123")).toEqual("321,312,231,213,132,123");
  });

  it("generates all the cobinations of the provided integers", () => {
    expect(solution("12a b3")).toEqual("321,312,231,213,132,123");
  });
});
