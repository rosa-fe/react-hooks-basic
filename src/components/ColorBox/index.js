import React, { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};
function getRandomColor() {
  let colorList = ["yellow", "red", "blue", "orange"];
  const randomIndex = Math.floor(Math.random() * 4);
  return colorList[randomIndex];
}
function ColorBox() {
  const initialColor = localStorage.getItem("box_color") || "deeppink";
  console.log("ColorBox -> initialColor", initialColor);
  const [color, setColor] = useState(() => {
    return initialColor;
  });
  let handleBoxClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };
  return (
    <div
      onClick={handleBoxClick}
      className="color-box"
      style={{ background: color }}
    ></div>
  );
}

export default ColorBox;
