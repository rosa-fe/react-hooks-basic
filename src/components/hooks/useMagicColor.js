import { useEffect, useState, useRef } from "react";
function randomColor(color) {
  let colors = ["green", "blue", "deeppink"];
  let currentIndex = color.indexOf(color);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * 3);
  }
  return colors[newIndex];
}

export default function useMagicColor() {
  const [color, setColor] = useState("purple");
  const refColor = useRef("purple");
  console.log("color", color);
  useEffect(() => {
    let colorInterVal = setInterval(() => {
      let newcolor = randomColor(refColor.current);

      setColor(newcolor);
      refColor.current = newcolor;
    }, 2000);
    return () => {
      clearInterval(colorInterVal);
    };
  }, []);
  return color;
}
