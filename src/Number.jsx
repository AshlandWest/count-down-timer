import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import ReactCardFlip from "react-card-flip";

const Number = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [oldNumber, setOldNumber] = useState(props.number);
  const [newNumber, setNewNumber] = useState(props.number);

  useEffect(() => {
    setNewNumber(props.number);
    setIsFlipped((prevState) => !prevState);
    setOldNumber(newNumber);
  }, [props.number]);

  return (
    <CSSTransition in={true} appear={true} timeout={2000} classNames="fade">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        containerStyle={{ display: "inline-block" }}
        infinite={true}
        flipSpeedFrontToBack={props.speed / 1666}
        flipSpeedBackToFront={props.speed / 1666}
      >
        <span className={"number"}>{isFlipped ? oldNumber : newNumber}</span>
        <span className={"number"}>{isFlipped ? newNumber : oldNumber}</span>
      </ReactCardFlip>
    </CSSTransition>
  );
};

export default Number;
