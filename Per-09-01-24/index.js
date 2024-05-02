const { namaRelasi, namaDaerah, sekolah, abjadArray } = require("./relasi")

const { angkaHari, bintangPersegiPanjang, nilaiUlangan } = require("./tugas")

console.log("-----");

console.log(namaRelasi("Saeful Ramadhan"));
console.log("-----");

console.log(namaDaerah("Kabupaten Cirebon"));
console.log("-----");

console.log(sekolah("SMK TI BAZMA", "Teknik Informatika"));
console.log("-----");

console.log(abjadArray());
console.log(abjadArray(1));
console.log(abjadArray(2));
console.log("-----");

console.log(angkaHari(6));
console.log("-----");

bintangPersegiPanjang(5, 2)
console.log("-----");

console.log(nilaiUlangan(100))
console.log("-----");