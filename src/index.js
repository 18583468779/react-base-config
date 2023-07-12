import { a } from "./a";
const b = import("./b");

const h1 = () => {
  console.log("xiewen");
  console.log(a);
  console.log(b);
  console.log(Promise.resolve("test promise"));
};

h1();
