// kasir.js
const fs = require("fs");
const readline = require("readline");

function askQuestion(prompt, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(prompt, (answer) => {
    callback(answer);
    rl.close();
  });
}

function question(prompt) {
  return new Promise((resolve) => {
    askQuestion(prompt, resolve);
  });
}

function readData() {
  try {
    const data = fs.readFileSync("./dataBase/data.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(
    "./dataBase/data.json",
    JSON.stringify(data, null, 2),
    "utf8"
  );
}

function addData(newItem) {
  const data = readData();
  newItem.id = generateRandomId();
  data.push(newItem);
  writeData(data);
  console.log("Data berhasil ditambahkan.");
}

function updateData(updatedItem) {
  if (isNaN(updatedItem.id)) {
    console.log("ID tidak valid. Masukkan nomor ID yang valid.");
    return;
  }

  const data = readData();
  const index = data.findIndex((item) => item.id === updatedItem.id);

  if (index !== -1) {
    const newData = { ...data[index] };

    for (const key in updatedItem) {
      if (
        key !== "id" &&
        updatedItem[key] !== null &&
        updatedItem[key] !== undefined &&
        updatedItem[key] !== ""
      ) {
        newData[key] = updatedItem[key];
      }
    }

    data[index] = newData;
    writeData(data);
    console.log(`Data dengan ID ${updatedItem.id} berhasil diupdate.`);
  } else {
    console.log(
      `ID ${updatedItem.id} tidak valid. Data tidak ditemukan, update dibatalkan.`
    );
  }
}

function deleteData(id) {
  if (isNaN(id)) {
    console.log("ID tidak valid. Masukkan nomor ID yang valid.");
    return;
  }

  const data = readData();
  const index = data.findIndex((item) => item.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    writeData(data);
    console.log(`Data dengan ID ${id} berhasil dihapus.`);
  } else {
    console.log(
      `ID ${id} tidak valid. Data tidak ditemukan, penghapusan dibatalkan.`
    );
  }
}

function getDataById(id) {
  if (isNaN(id)) {
    console.log("ID tidak valid. Masukkan nomor ID yang valid.");
    return;
  }

  const data = readData();
  const item = data.find((item) => item.id === id);

  if (item) {
    console.log("Data Berdasarkan ID:");
    console.log(item);
  } else {
    console.log(`ID ${id} tidak valid. Data tidak ditemukan.`);
  }
}

function generateRandomId() {
  return Math.floor(Math.random() * 1000) + 1;
}

module.exports = {
  addData,
  updateData,
  deleteData,
  getDataById,
  readData,
  askQuestion,
  question,
  generateRandomId,
};