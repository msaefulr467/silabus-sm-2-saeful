// app.js
const readline = require("readline");
const kasir = require("./kasir");
const addDataModule = require("./addData");
const updateDataModule = require("./updateData");
const deleteDataModule = require("./deleteData");
const getDataByIdModule = require("./getDataById");
const showAllDataModule = require("./showAllData");

function promptUser() {
  console.log("Pilih operasi :");
  console.log(" 1. Tambah");
  console.log(" 2. Update");
  console.log(" 3. Hapus");
  console.log(" 4. Tampilkan By Id");
  console.log(" 5. Tampilkan Semua");
  console.log(" 6. Batalkan");

  kasir.question("=> ").then((choice) => {
    handleUserChoice(choice.trim()); // tambahkan trim di sini
  });
}

function handleUserChoice(choice) {
  switch (choice) {
    case "1":
      addDataModule.promptAddData(() => promptUser());
      break;
    case "2":
      updateDataModule.promptUpdateData(() => promptUser());
      break;
    case "3":
      deleteDataModule.promptDeleteData(() => promptUser());
      break;
    case "4":
      getDataByIdModule.promptGetDataById(() => promptUser());
      break;
    case "5":
      showAllDataModule.showAllData(() => promptUser());
      break;
    case "6":
      console.log("Keluar dari Program");
      break;
    default:
      console.log("Pilihan tidak valid. Silakan coba lagi.");
      promptUser();
      break;
  }
}

promptUser();