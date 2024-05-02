// Tipe Asynchronous
const getKelas = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const kelas = id === 1 ? "SIJA" : "RPL";
        resolve({ id, kelas });
      }, 1000); // Menambahkan penundaan 1 detik untuk mensimulasikan operasi asynchronous
    });
  };
  
  // Jika id = 1, maka datanya adalah SIJA
  getKelas(1)
    .then((kelasSija) => {
      console.log(kelasSija);
    })
    .catch((error) => {
      console.error(error);
    });
  
  // Jika id selain = 1, maka datanya adalah RPL
  getKelas(2)
    .then((kelas) => {
      console.log(kelas);
    })
    .catch((error) => {
      console.error(error);
    });


// Contoh penggunaan Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulasi operasi asynchronous
      setTimeout(() => {
        const success = true;
  
        if (success) {
          resolve('Data berhasil diambil');
        } else {
          reject('Terjadi kesalahan saat mengambil data');
        }
      }, 1000);
    });
  };
  
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });