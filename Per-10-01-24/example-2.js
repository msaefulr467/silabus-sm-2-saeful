const fs = require('fs');
const readline = require('readline');
const { json } = require('stream/consumers');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// cek file db/todo.json
const directory = './db'
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
}

// cek jika folder ada data, buatkan file todo.json dengan bentuk array.
const checkFile = './db/data.json'
if (!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, '[]', 'utf-8');
}

const exampleQuestion = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (jawaban) => {
            resolve(jawaban);
        });
    });
}

const addData = async () => {
    const nama = await exampleQuestion("Masukan nama anda : ");
    const umur = await exampleQuestion("Masukan umur anda : ");
    const hobi = await exampleQuestion("Masukan 1 hobi anda : ");

    const data = { nama, umur, hobi };
    const fileDb = fs.readFileSync('./db/data.json', 'utf-8');
    const dataDiri = JSON.parse(fileDb);

    dataDiri.push(data);
    fs.writeFileSync('./db/data.json', JSON.stringify(dataDiri));
    console.log("Terima Kasih sudah memperkenalkan dirinya");
    rl.close();
}
addData();