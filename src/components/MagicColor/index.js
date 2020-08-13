import React from "react";
import useMagicColor from "../hooks/useMagicColor";
import "./index.scss";

export default function MagicColor() {
  let color = useMagicColor();
  console.log("MagicColor -> color", color);
  return <div className="magic-box" style={{ background: color }}></div>;
}
