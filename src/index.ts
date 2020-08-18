import { User } from "./models/User";
import axios from "axios";

const user = new User({ name: "Ryan", age: 34 });

const userWithId = new User({ id: 1 });
userWithId.fetch();

// Testing the on method to add event callbacks
user.on("change", () => {
  console.log("Change #1");
});
user.on("change", () => {
  console.log("Change #2");
});
user.on("click", () => {
  console.log("Save was triggered");
});

// Here we can update each piece of data individually
// This is allowed because we added a ? to the UserProps interface to make them optional.
user.set({ name: "NewRyan" });
user.set({ age: 999 });

console.log(user.get("name"));
console.log(user.get("age"));

// Tests event triggers
user.trigger("change");
user.trigger("save");
user.trigger("");

// Add a user
axios.post("http://localhost:3000/users", {
  name: "Ryan",
  age: 34,
});

// Get a user
axios.get("http://localhost:3000/1");
