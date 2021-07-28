import React from "react";

function Input(props) {
  return (
    <input
      type="number"
      value={props.value ? props.value : ""}
      onChange={(e) => {
        props.function(Number(e.target.value));
        console.log(typeof props.value);
      }}
      placeholder="Time in minutes"
    ></input>
  );
}

export default Input;
