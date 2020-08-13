import React from "react";
import useClock from "./useClock";

function CustomClock(props) {
  let time = useClock();
  return <div>{time}</div>;
}

CustomClock.propTypes = {};

export default CustomClock;
