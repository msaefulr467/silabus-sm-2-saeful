function namaRelasi(nama) {
    return `Hello my name is ${nama}`;
}

function namaDaerah(daerah) {
    return `Daerah tempat tinggal saya berada di ${daerah}`;
}

function sekolah(namaSekolah, jurusanSekolah) {
    const data  = {
        namaSekolah,
        jurusanSekolah
    }
    return `Saya bersekolah di ${namaSekolah} dengan Jurusan ${jurusanSekolah}.`;
}

function abjadArray(abjad) {
    const abjadLama = ['a', 'b', 'c', 'd'];
    if (abjad !== undefined) {
        abjadLama.unshift(abjad);
    }
    return abjadLama;
}

module.exports = {
    namaRelasi,
    namaDaerah,
    sekolah,
    abjadArray
};