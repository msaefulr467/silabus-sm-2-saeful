// deleteData.js
const kasir = require("./kasir");

function promptDeleteData(callback) {
  kasir.askQuestion("Masukkan ID produk yang akan dihapus: ", (id) => {
    const itemId = parseInt(id);

    if (isNaN(itemId)) {
      console.log("ID tidak valid. Masukkan nomor ID yang valid.");
      callback();
    } else {
      kasir.deleteData(itemId);
      callback();
    }
  });
}

module.exports = { promptDeleteData };