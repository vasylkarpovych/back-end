"use strict";

// console.log(global);

// setTimeout(() => {
//   console.log("Hi Vasek!");
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// console.log(`Hello, ${process.argv[2]}`);

const url = new URL("https://youtube.com/path/name#test");

console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
