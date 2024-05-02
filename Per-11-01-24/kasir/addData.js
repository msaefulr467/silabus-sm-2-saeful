// addData.js
const kasir = require("./kasir");

function promptAddData(callback) {
  console.log("Masukkan nama produk baru:");
  kasir.askQuestion("=> ", (name) => {
    console.log("Masukkan jumlah produk:");
    kasir.askQuestion("=> ", (quantity) => {
      console.log("Masukkan jenis produk:");
      kasir.askQuestion("=> ", (type) => {
        console.log("Masukkan tahun produksi produk:");
        kasir.askQuestion("=> ", (productionYear) => {
          console.log("Masukkan tahun kadaluarsa produk:");
          kasir.askQuestion("=> ", (expirationYear) => {
            console.log("Masukkan target jual produk:");
            kasir.askQuestion("=> ", (salesTarget) => {
              const productId = kasir.generateRandomId();
              const newData = {
                id: productId,
                name,
                quantity: parseInt(quantity),
                type,
                productionYear: parseInt(productionYear),
                expirationYear: parseInt(expirationYear),
                salesTarget: parseInt(salesTarget),
              };
              kasir.addData(newData);

              console.log("Data berhasil ditambahkan.");
              callback();
            });
          });
        });
      });
    });
  });
}

module.exports = {
  promptAddData,
};