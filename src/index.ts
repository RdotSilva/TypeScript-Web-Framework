import { User } from "./models/User";
import axios from "axios";

const user = new User({ name: "Ryan", age: 34 });

// User on getter method test
user.on("change", () => {
  console.log("User was changed");
});

// Accessors example
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person = new Person("Ryan", "Silva");
// console.log(person.fullName);

// Create new user with id
// const userWithId = new User({ id: 1 });

// Update existing user (testing put request)
// userWithId.set({ name: "Tom", age: 20 });
// userWithId.save();

// Create new user without id
// const userWithoutId = new User({ name: "New User", age: 0 });
// userWithoutId.save();

// Testing the on method to add event callbacks
// user.events.on("change", () => {
//   console.log("Change #1");
// });
// user.events.on("change", () => {
//   console.log("Change #2");
// });
// user.events.on("click", () => {
//   console.log("Save was triggered");
// });

// Here we can update each piece of data individually
// This is allowed because we added a ? to the UserProps interface to make them optional.
// user.set({ name: "NewRyan" });
// user.set({ age: 999 });

// console.log(user.get("name"));
// console.log(user.get("age"));

// Tests event triggers
// user.events.trigger("change");
// user.events.trigger("save");
// user.events.trigger("");

// Add a user
// axios.post("http://localhost:3000/users", {
//   name: "Ryan",
//   age: 34,
// });

// Get a user
// axios.get("http://localhost:3000/1");
