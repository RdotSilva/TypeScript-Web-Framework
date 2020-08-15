import { User } from "./models/User";

const user = new User({ name: "Ryan", age: 34 });

console.log(user.get("name"));
console.log(user.get("age"));
