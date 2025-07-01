const rhythmFigures = [
  { name: "Negra", symbol: "♩" },
  { name: "Corchea", symbol: "♪" },
  { name: "Corchea con puntillo", symbol: "♩." },
  { name: "Semicorchea", symbol: "𝅘𝅥𝅯" },
  { name: "Tresillo", symbol: "♫" },
  { name: "Síncopa negra", symbol: "⇅" },
  { name: "Síncopa corchea", symbol: "⇄" },
  { name: "Síncopa semicorchea", symbol: "⇆" },
  { name: "Silencio negra", symbol: "𝄽" },
  { name: "Silencio corchea", symbol: "𝄾" },
  { name: "Silencio semicorchea", symbol: "𝄿" }
];

function generateRhythm(length = 4) {
  const pattern = [];
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * rhythmFigures.length);
    pattern.push(rhythmFigures[index]);
  }
  return pattern;
}

document.getElementById("generate").addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const pattern = generateRhythm(length);
  const display = document.getElementById("rhythm-display");

  display.innerHTML = pattern.map(item => item.symbol).join(" ");
});
