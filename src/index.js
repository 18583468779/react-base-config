import Component from "./jsx.demo.jsx";
import a from "./a";
const b = import("./b");

console.log(Component);
const h1 = () => {
  console.log("xiewen");
  console.log(a);
  console.log(b);
  console.log(Promise.resolve("test promise"));
};

h1();
