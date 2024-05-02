// Memahami cara kerja seperti diatas, bagaimana jika mempunyai 3 data dengan menambahkan multimedia? namun tidak mengurangi kedua data pada kode diatas.Artinya data multimedia ini sifat idnya = 3

const getKelas = (kodeId) => {
    const kelas = kodeId === 1 ? "SIJA" : "#" && kodeId === 2 ? "RPL" : "Multimedia";
    return {kodeId, kelas}
}

console.log(getKelas(1))
console.log(getKelas(2))
console.log(getKelas(3))
console.log(getKelas(4))


// Bagaimana jika data yang dimiliki pada synchronous sebelumnya, dijadikan asynchronous pada tipe funcNameKelas ?

const getKelasAsync = async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const kelas = id === 1 ? "SIJA" : "RPL";
        resolve({ id, kelas });
      }, 1000);
    });
  };
  
  const funcNameKelas = async (id) => {
    try {
      const kelasData = await getKelasAsync(id);
      return kelasData.kelas;
    } catch (error) {
      throw error;
    }
  };
  
  (async () => {
    try {
      const kelasSija = await funcNameKelas(1);
      console.log(kelasSija);
    } catch (error) {
      console.error(error);
    }
  
    try {
      const kelasRPL = await funcNameKelas(2);
      console.log(kelasRPL);
    } catch (error) {
      console.error(error);
    }
  })();
  

// Bagaimana dengan menambahkannya kembali untuk fungsi 3 data pada synchronous menjadi asynchronous?
const getDataAsync = async () => {
    return new Promise((resolve) => {
      // Simulasi pengambilan data secara asynchronous
      setTimeout(() => {
        const data = ['Data1', 'Data2', 'Data3'];
        resolve(data);
      }, 1000);
    });
  };
  
  const funcNameData = async () => {
    try {
      const data = await getDataAsync();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  (async () => {
    try {
      const result = await funcNameData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  
    try {
      const kelasSija = await funcNameKelas(1);
      console.log(kelasSija);
    } catch (error) {
      console.error(error);
    }
  
    try {
      const kelasRPL = await funcNameKelas(2);
      console.log(kelasRPL);
    } catch (error) {
      console.error(error);
    }
})();