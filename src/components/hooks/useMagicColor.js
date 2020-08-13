import { useEffect, useState } from "react";
function randomColor() {
  let color = ["red", "yellow", "green", "blue", "deeppink"];
  return color[Math.floor(Math.random() * 5)];
}

export default function useMagicColor() {
  const [color, setColor] = useState("purple");
  useEffect(() => {
    let colorInterVal = setInterval(() => {
      let color = randomColor();
      setColor(color);
    }, 200);
    return () => {
      clearInterval(colorInterVal);
    };
  }, []);
  return color;
}
