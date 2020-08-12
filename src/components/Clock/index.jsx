import React, { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

Clock.propTypes = {};

function formatDate(date) {
  if (!date) return;
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return `${hours} : ${minutes} : ${second}`;
}

function Clock(props) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    let timeOut = setInterval(() => {
      const now = new Date();
      //HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 100);

    //clean up
    return () => {
      console.log("clean up");
      clearInterval(timeOut);
    };
  }, []);

  return (
    <div>
      <h2>{timeString}</h2>
    </div>
  );
}

export default Clock;
