const caesarModule = require("../src/caesar");
const expect = require("chai").expect;
const caesar = caesarModule.caesar;

describe("caesar", () => {
  it("should return false if 'shift' value is equal to 0, less than -25, or greater than 25, or not present.", () => {
    const expectedValue = false;
    const actualValue1 = caesarModule.caesar("welcome", 0, true);
    const actualValue2 = caesarModule.caesar("welcome", -26, true);
    const actualValue3 = caesarModule.caesar("welcome");
    const actualValue4 = caesarModule.caesar("welcome", 26, true);
    expect(actualValue1).to.be.false;
    expect(actualValue2).to.be.false;
    expect(actualValue3).to.be.false;
    expect(actualValue4).to.be.false;
  });
  it("should ignore capital letters", () => {
    const testInput = "tHinkFul tEst";
    const givenValues = caesarModule.caesar("tHinkFul tEst", 3);
    expect(givenValues).to.be.equal("wklqnixo whvw");
  });
  it("should handle shifts if they go past alphabet border", () => {
    const expectedValue = "aaa";
    const givenValues = caesarModule.caesar("zzz", 1);
    expect(givenValues).to.be.equal(expectedValue);
    const expectedValue2 = "zzz";
    const givenValues2 = caesarModule.caesar("aaa", -1);
    expect(givenValues2).to.be.equal(expectedValue2);
  });
  it("should keep spaces and nonalphabetic symbols", () => {
    const expectedValue = "cde !@#$";
    const actualValue = caesarModule.caesar("abc !@#$", 2);
    expect(expectedValue).to.equal(actualValue);
  });

});
