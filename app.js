"use strict";

const fs = require("fs");

fs.readFile("./test.txt", "utf-8", (error, data) => {
  // console.log(data);

  fs.mkdirSync("./files", () => {});

  fs.writeFileSync("./files/test2.txt", `${data} New text!`, (error) => {
    error ? console.log(error) : null;
  });
});

// console.log("Just test!");

setTimeout(() => {
  if (fs.existsSync("./files/test2.txt")) {
    fs.unlink("./files/test2.txt", () => {});
  }
}, 5000);

setTimeout(() => {
  if (fs.existsSync("./files")) {
    fs.rmdir("./files", () => {});
  }
}, 7000);
