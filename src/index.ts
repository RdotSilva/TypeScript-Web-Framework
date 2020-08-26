import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

// User on getter method test
user.on("change", () => {
  console.log(user);
});

user.fetch();
