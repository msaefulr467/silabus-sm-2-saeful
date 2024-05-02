// generateRandomId.js

function generateRandomId() {
  return Math.floor(Math.random() * 1000) + 1;
}

module.exports = { generateRandomId };