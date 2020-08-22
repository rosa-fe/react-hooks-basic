import React from "react";

function Demo(props) {
  console.log(props.name);
  return <div onClick={props.onClick}>Hello {props.name}</div>;
}
export default React.memo(Demo);
