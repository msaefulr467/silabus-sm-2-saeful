// getDataById.js
const kasir = require("./kasir");

function promptGetDataById(callback) {
  kasir.askQuestion("Masukkan ID produk yang akan ditampilkan: ", (id) => {
    const itemId = parseInt(id);

    if (isNaN(itemId)) {
      console.log("ID tidak valid. Masukkan nomor ID yang valid.");
      callback();
    } else {
      kasir.getDataById(itemId);
      callback();
    }
  });
}

module.exports = { promptGetDataById };