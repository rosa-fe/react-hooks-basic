import React from "react";
import "./index.scss";
import useClock from "../hooks/useClock";

export default function BetterClock() {
  let time = useClock();

  return (
    <div className="better-clock">
      <p className="better-clock__time">{time}</p>
    </div>
  );
}
