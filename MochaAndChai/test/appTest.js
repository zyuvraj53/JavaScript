const assert = require("chai").assert;
const app = require("../app");
const sayHello = require("../app").sayHello;

describe("App", () => {
  it("app should return hello", () => {
    assert.equal(sayHello(), "hello");
  });
});
