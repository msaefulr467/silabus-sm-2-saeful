function nilaiRapor(nilai) {
    switch (true) {
        case (nilai > 90 && nilai <= 100):
            console.log("terbaik");
            break;
        case (nilai > 80 && nilai <= 90):
            console.log("Cukup Baik")
            break;
        case (nilai > 60 && nilai <= 80):
            console.log("Baik");
            break;
        case (nilai > 50 && nilai <= 60):
            console.log("Harus semangat");
            break;
        case (nilai >= 0 && nilai <= 50):
            console.log("Remedial");
            break;
        default:
            console.log("Undefined");
            break;
    };
}
module.exports = nilaiRapor