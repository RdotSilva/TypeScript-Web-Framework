import { User } from "./models/User";

const user = new User({ name: "Ryan", age: 34 });

// Here we can update each piece of data individually
// This is allowed because we added a ? to the UserProps interface to make them optional.
user.set({ name: "NewRyan" });
user.set({ age: 999 });

console.log(user.get("name"));
console.log(user.get("age"));
