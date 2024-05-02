const { isUtf8 } = require('buffer');
const fs = require('fs');
const readline = require('readline');
const { json } = require('stream/consumers');
// const { generateRandomId } = require('./generateRandomId')

// membuat interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan nama lengkap : ', (nama) => {
    rl.question('Masukan umur anda : ', (umur) => {
        rl.question('Masukan sekolah anda : ', (sekolah) => {
            // console.log('-- Data saya --')
            // console.log(`Nama Lengkap saya adalah ${nama}. saya berumur ${umur} dan saya sekolah di ${sekolah}.`);

            const data = { nama, umur, sekolah };
            const fileDb = fs.readFileSync('./db/data.json', 'utf-8');
            const dataDiri = JSON.parse(fileDb);

            dataDiri.push(data);
            fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri));
            console.log("Terima Kasih sudah memperkenalkan dirinya")
            rl.close();
        });
    });
});