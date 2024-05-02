// updateData.js
const kasir = require("./kasir");

function promptUpdateData(callback) {
  kasir.askQuestion("Masukkan ID produk yang akan diupdate: ", (id) => {
    const itemId = parseInt(id);

    if (isNaN(itemId)) {
      console.log("ID tidak valid. Masukkan nomor ID yang valid.");
      callback();
    } else {
      kasir.askQuestion(
        "Masukkan nama produk baru (kosongkan jika tidak ingin diubah): ",
        (name) => {
          kasir.askQuestion(
            "Masukkan jumlah produk baru (kosongkan jika tidak ingin diubah): ",
            (quantity) => {
              kasir.askQuestion(
                "Masukkan jenis produk baru (kosongkan jika tidak ingin diubah): ",
                (type) => {
                  kasir.askQuestion(
                    "Masukkan tahun produksi produk baru (kosongkan jika tidak ingin diubah): ",
                    (productionYear) => {
                      kasir.askQuestion(
                        "Masukkan tahun kadaluarsa produk baru (kosongkan jika tidak ingin diubah): ",
                        (expirationYear) => {
                          kasir.askQuestion(
                            "Masukkan target jual produk baru (kosongkan jika tidak ingin diubah): ",
                            (salesTarget) => {
                              const updatedItem = {
                                id: itemId,
                                name,
                                quantity,
                                type,
                                productionYear,
                                expirationYear,
                                salesTarget,
                              };
                              kasir.updateData(updatedItem);
                              callback();
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    }
  });
}

module.exports = { promptUpdateData };