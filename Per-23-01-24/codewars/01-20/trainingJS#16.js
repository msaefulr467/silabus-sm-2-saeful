function cutIt(arr) {
    // Temukan panjang string terpendek
    const minLength = Math.min(...arr.map(str => str.length));

    // Potong semua string ke panjang terpendek
    const result = arr.map(str => str.slice(0, minLength));

    return result;
}