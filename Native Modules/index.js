const fs = require("fs")

// fs.writeFile('message.txt', 'hello from node.js!', (err) => {
// if(err) throw err;
// console.log("File Created!");
// });

fs.readFile('message.txt', 'utf8', (err, data) => {
if(err) throw err;
console.log(data);
});