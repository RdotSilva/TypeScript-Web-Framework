import { User } from "./models/User";

const user = new User({ name: "Ryan", age: 34 });

// Testing the on method to add event callbacks
user.on("change", () => {});
user.on("change", () => {});
user.on("click", () => {});

// TODO: Add test case to test event triggering method

// Here we can update each piece of data individually
// This is allowed because we added a ? to the UserProps interface to make them optional.
user.set({ name: "NewRyan" });
user.set({ age: 999 });

console.log(user.get("name"));
console.log(user.get("age"));

console.log(user);
