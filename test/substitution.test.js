const expect =require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
    it("should return false if alphabet is not 26 characters long", () => {
        const expectedValue = false;
        const actualValue = substitutionModule.substitution("banana", "oxfxfx");
        expect(expectedValue).to.equal(actualValue);
    })
    it("should correctly translate phrase based on alphabet given to function", () => {
        const expectedValue = "bcdef";
        const actualValue = substitutionModule.substitution("abcde", "bcdefghijklmnopqrstuvwxyza");
        expect(expectedValue).to.equal(actualValue);
    });
    it("should return false if there are any duplicates in given alphabet", () => {
        const expectedValue = false;
        const actualValue = substitutionModule.substitution(
          "turtle",
          "bcbcbchijklmnopqrstuvwxbcd"
        );
        expect(expectedValue).to.equal(actualValue);
      });
    it("should maintain spaces in both encoding and decoding", () => {
        const expectedValue = "b c d e f";
        const actualValue = substitutionModule.substitution("a b c d e", "bcdefghijklmnopqrstuvwxyza");
        expect(expectedValue).to.equal(actualValue);
    })
    it("should ignore capital letters", () => {
        const expectedValue = "bcdef";
        const actualValue = substitutionModule.substitution("abcde", "bcdefghijklmnopqrstuvwxyza");
        expect(expectedValue).to.equal(actualValue);
      });
});
