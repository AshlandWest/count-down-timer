import React from "react";
import logo from "./logo.svg";

function Button(props) {
  return (
    <button
      className="button"
      onClick={() => {
        props.function(props.funcPeram);
      }}
      disabled={
        props.speed === props.funcPeram &&
        props.text !== "Start!" &&
        props.text !== "Stop!"
          ? true
          : false
      }
    >
      {props.text}
    </button>
  );
}

export default Button;
