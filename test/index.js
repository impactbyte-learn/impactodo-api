const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");

const expect = chai.expect;
const API_URL = `http://localhost:3000`;

chai.use(chaiHttp);

describe("Number", function() {
  describe("Equality", function() {
    it("should return true if 1st and 2nd number are the same", function() {
      assert.equal(1, 1);
      assert.equal(2, 2);
      assert.equal(3, 3);
    });
  });

  describe("Non Equality", function() {
    it("should return true if 1st and 2nd number are not the same", function() {
      assert.notEqual(1, 2);
      assert.notEqual(2, 3);
      assert.notEqual(3, 4);
    });
  });
});

describe("API", function() {
  describe("Todos", function() {
    it("should response an object", function(done) {
      chai
        .request(API_URL)
        .get("/todos")
        .end(function(err, res) {
          expect(res).to.be.an("object");
          expect(res).to.have.status(200);
          done(); // Call done to signal callback end
        });
    });

    it("should contain an array of todos in body data", function(done) {
      chai
        .request(API_URL)
        .get("/todos")
        .end(function(err, res) {
          expect(res.body.data).to.be.an("array");
          done();
        });
    });
  });
});
