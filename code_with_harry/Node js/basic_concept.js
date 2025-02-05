// console.log('Hello');
const fs = require("fs");
let text = fs.readFileSync("sample.txt","utf-8");
text = text.replace("Hii","Hello");

console.log("The content of the file is:");
console.log(text);

console.log("Creating a file");
fs.writeFileSync("sample2.txt",text);
