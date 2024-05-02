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

// console.log(getKelas(1));
// console.log(getKelas(2));
// console.log(getKelas(3));
// console.log(getKelas(4));
// console.log(getKelasDeskripsi(1));
// console.log(getGameItem(1));