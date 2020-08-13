import { useEffect, useState } from "react";

let formatDate = (date) => {
  if (!date) return;
  let hour = `0${date.getHours()}`.slice(-2);

  let mi = `0${date.getMinutes()}`.slice(-2);
  let se = `0${date.getSeconds()}`.slice(-2);
  return `${hour}:${mi}:${se}`;
};
function useClock(props) {
  const [timeString, settimeString] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      let date = new Date();
      let formated = formatDate(date);
      settimeString(formated);
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, []);
  return timeString;
}

useClock.propTypes = {};

export default useClock;
