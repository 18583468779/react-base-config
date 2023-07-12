import Component from "./jsx.demo.jsx";
import a from "@/a";
import xieWen from "@/ts-demo.ts";
import { MyIndex } from "./MyIndex.tsx";
const b = import("./b");

const h1 = () => {
  console.log("xiewen");
  console.log(a);
  console.log(b);
  console.log(Promise.resolve("test promise"));
  console.log(xieWen);
  console.log(Component);
  console.log(MyIndex);
};

h1();
