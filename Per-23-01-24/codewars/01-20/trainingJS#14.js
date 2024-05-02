function colorOf(r, g, b) {
  // Convert numbers to hex string form
  const redHex = r.toString(16).padStart(2, "0");
  const greenHex = g.toString(16).padStart(2, "0");
  const blueHex = b.toString(16).padStart(2, "0");

  // Combine them to a web color code
  const colorCode = `#${redHex}${greenHex}${blueHex}`;

  return colorCode;
}