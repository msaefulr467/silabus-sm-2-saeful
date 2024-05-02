function fiveLine(s) {
  s = s.trim(); // Menghapus spasi di awal dan akhir string
  let result = "";

  for (let i = 1; i <= 5; i++) {
    result += `${s.repeat(i)}\n`;
  }

  return result.trim(); // Menghapus spasi di akhir hasil string
}