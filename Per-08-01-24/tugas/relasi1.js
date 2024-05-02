const funcDay = (id, namaHari) => {
    return { id, namaHari };
}

const getHari = (id) => {
    const hari = 
        id === 1 ? funcDay(1, "senin"):
        id === 2 ? funcDay(2, "selasa"):
        id === 3 ? funcDay(3, "rabu"):
        id === 4 ? funcDay(4, "kamis"):
        id === 5 ? funcDay(5, "jumat"):
        funcDay("x" ("Hari Libur"));
    return(id, hari)
}

module.exports = getHari;