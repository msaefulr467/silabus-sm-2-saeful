const { kelasBaru, getKelasAsync, getKelasBaruAsync } = require("./arsitektur")

// console.log(kelasBaru(1));
// console.log(kelasBaru(2));
// console.log(kelasBaru(3));

console.log('--- ---')

getKelasAsync(1).then((kelasSija) => {
    // console.log(kelasSija);
})

getKelasAsync(2).then((kelasRpl) => {
    // console.log(kelasRpl);
})

console.log('--- ---')

getKelasBaruAsync(1).then((kelasSija) => {
    console.log(kelasSija)
})

getKelasBaruAsync(2).then((kelasRpl) => {
    console.log(kelasRpl)
})

getKelasBaruAsync(3).then((kelasMultimedia) => {
    console.log(kelasMultimedia)
})