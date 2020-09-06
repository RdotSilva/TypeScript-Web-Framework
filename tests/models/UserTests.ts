import { expect } from "chai";
import "mocha";
import { User } from "../../src/models/User";

const userInfo = {
  id: 1,
  name: "Ryan",
  age: 24,
};

describe("User Model Tests", () => {
  it("setRandomAge method should change age value", () => {
    const user = User.buildUser(userInfo);
    user.setRandomAge();
    expect(user.get("age")).to.not.equal(24);
  });
});
