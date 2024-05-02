const fs = require('fs');

// fs.writeFileSync("perkenalan.txt", "Perkenalkan nama saya Saeful");
// console.log(fs);

const perkenalan = fs.readFileSync("perkenalan.txt");
console.log(perkenalan.toString());

// writeFileSync
// readFileSync
// unlinkFileSync
// mkdirSync