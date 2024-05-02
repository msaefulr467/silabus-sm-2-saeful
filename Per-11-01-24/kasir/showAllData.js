// showAllData.js
const kasir = require("./kasir");

function showAllData(callback) {
  const data = kasir.readData();
  console.log("Semua Data:");
  console.log(JSON.stringify(data, null, 2));
  callback();
}

module.exports = { showAllData };