const { expect } = require("chai");

describe("Testing the home page", function() {
  this.timeout(0);

  it("should load", async function() {
    return await kermit.goto("http://twitter.com");
  });
});
