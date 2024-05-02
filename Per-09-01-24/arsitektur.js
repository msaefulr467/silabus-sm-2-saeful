const getKelas = (kodeId) => {
    const kelas = kodeId === 1 ? "SIJA" : "RPL";
    return {kodeId, kelas}
}


// cara 2 dengan menambahkan kepanjangan dari kode kelas
const functionKelas = (kode, deskripsi, kelas) => {
    return { kode, deskripsi, kelas };
}

const getKelasDeskripsi = (kodeId) => {
    const kelas = kodeId === 1 ? functionKelas("SIJA", "Sistem Informasi Jaringan & Aplikasi", 11) : functionKelas("RPL", "Rerkayasa Perangkat Lunak", 12);

    return { kodeId, kelas }
}


// buatlah 5 parameter data object bentuk item game (ml, freefire, genshine, impect)

const functionItem = (nama, deskripsi) => {
    return { nama, deskripsi }
}

const getItem = (kodeItem, namaItem, cooldown, damage, type) => {
    return { kodeItem, namaItem, cooldown, damage, type };
}

const getGameItem = (gameItemId) => {
    const items = gameItemId === 1 ? getItem("imo", "imortal", "210", "hidup lagi", "tank") : getItem("hs", "hunter strike", "29", 0, "attack")
    return { gameItemId, items};
}


// menambahkan multimedia dari kelas
const classFunc = (kode, namaKelas) => {
    return { kode, namaKelas}
}

const kelasBaru = (id) => {
    if (id === 1) {
        return classFunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi");
    } else if (id === 2) {
        return classFunc("RPL", "Rekayasa Perangkat Lunak");
    } else if (id === 3) {
        return classFunc("mult", "Multimedia");
    }
    return { id };
}

// async
// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// const getKelasAsync = async (kodeId) => {
//     await delay(1000);  // Simulating an asynchronous operation (1 second delay)
//     const kelas = kodeId === 1 ? "SIJA" : "RPL";
//     return { kodeId, kelas };
// };

// // Using await
// const result = await getKelasAsync(1);
// console.log(result);


const getKelasAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kelas = id === 1 ? "SIJA" : "RPL";
            resolve({id, kelas});
        }, 3000)
    })
}

const getKelasBaruAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let kelas;
            if (id === 1) {
                kelas = classFunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi");
            } else if (id === 2) {
                kelas = classFunc("RPL", "Rekayasa Perangkat Lunak");
            } else if (id === 3) {
                kelas = classFunc("mult", "Multimedia");
            }

            resolve({ id, kelas });
        }, 3000);
    });
};



module.exports = {
    kelasBaru,
    getKelasDeskripsi,
    getGameItem,
    getKelas,
    getKelasAsync,
    getKelasBaruAsync
};
