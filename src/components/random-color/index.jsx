import  { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Utility function to generate a random number between 0 and max
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function generateRandomHexColor() {
    const hexCharacters = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      const randomIndex = getRandomNumber(hexCharacters.length);
      hexColor += hexCharacters[randomIndex];
    }

    setColor(hexColor);
  }

  // Function to generate a random RGB color
  function generateRandomRgbColor() {
    const r = getRandomNumber(256);
    const g = getRandomNumber(256);
    const b = getRandomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  // useEffect to generate a random color when colorType changes
  useEffect(() => {
    if (colorType === "rgb") {
      generateRandomRgbColor();
    } else {
      generateRandomHexColor();
    }
  }, [colorType]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setColorType("hex")}>Create HEX Color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB Color</button>
      <button onClick={() => {
        if (colorType === "hex") {
          generateRandomHexColor();
        } else {
          generateRandomRgbColor();
        }
      }}>Generate Random Color</button>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: "60px", marginTop: "50px", flexDirection: 'column', gap: '20px' }}>
        <h3>{colorType === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
