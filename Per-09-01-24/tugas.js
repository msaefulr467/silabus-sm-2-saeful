// 1. Hari senin - jumat
function angkaHari(hari) {
    switch (hari) {
        case 1:
            return "Hari Senin";
            break;
        case 2:
            return "Hari Selasa";
            break;
        case 3:
            return "Hari Rabu";
            break;
        case 4:
            return "Hari Kamis";
            break;
        case 5:
            return "Hari Jumat";
            break;
        default:
            return "Hari Sabtu & Minggu Libur";
            break;
    }
}

// 2. Membuat persegi panjang menggunakan bintang
function bintangPersegiPanjang(panjang, lebar) {
    for (let i = 0; i < lebar; i++) {
        let baris = ' ';
        for (let j = 0; j < panjang; j++) {
            baris += '* ';
        }
        console.log(baris);
    }
}

// 3. Buat nilai rapor
function nilaiUlangan(nilai) {
    if (nilai === 100){
        return 'Terbaik';
    } else if (nilai >= 90 && nilai <= 99) {
        return 'Baik';
    } else if (nilai >= 80 && nilai <=89) {
        return 'Cukup Baik';
    } else if (nilai >= 60 && nilai <= 79) {
        return 'Kurang Baik';
    } else if (nilai >= 10 && nilai <= 59) {
        return 'Kurang Belajar';
    } else {
        return 'Tidak Belajar';
    }
}

module.exports = {
    angkaHari,
    bintangPersegiPanjang,
    nilaiUlangan
};