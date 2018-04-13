const assert = require("assert");

describe("Number", function() {
  describe("Equality", function() {
    it("should return true if 1st and 2nd number are the same", function() {
      assert.equal(1, 1);
      assert.equal(2, 2);
      assert.equal(3, 3);
    });
  });
});
