import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Number from "./Number";
import Button from "./button";
import Input from "./Input";

function App() {
  const [totalTime, setTotalTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [tensMins, setTensMins] = useState(0);
  const [onesMins, setOnesMins] = useState(0);
  const [tensSecs, setTensSecs] = useState(0);
  const [onesSecs, setOnesSecs] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [userInput, setUserInput] = useState(0);

  const validateUserInput = (input) => {
    let output = input;
    if (input > 99) {
      output = 99;
    }
    setUserInput(output);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    console.log(isPaused);
  };

  const updateNumbers = useCallback(() => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime % 60);
    setTensMins(Math.floor(minutes / 10));
    setOnesMins(Math.floor(minutes % 10));
    setTensSecs(Math.floor(seconds / 10));
    setOnesSecs(Math.floor(seconds % 10));
    console.log(`time updated to ${totalTime}
    tensMins ${tensMins}
    onesMins ${onesMins}
    tensSecs ${tensSecs}
    onesSecs ${onesSecs}`);
  });

  useEffect(() => {
    if (totalTime === 0 && !isPaused) {
      setIsPaused(!isPaused);
    }
    if (!isPaused) {
      const intervalId = window.setInterval(() => {
        setTotalTime((totalTime) => totalTime - 1);
      }, speed);
      updateNumbers();
      return () => {
        window.clearInterval(intervalId);
      };
    }
    updateNumbers();
  }, [totalTime, isPaused]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ animationDuration: `${speed / 50}s` }}
        />
        <p className="inputContainer">
          <Input value={userInput} function={validateUserInput} />
          <Button
            text="Set Time"
            function={setTotalTime}
            funcPeram={userInput * 60}
          />
        </p>
        <p className={"numberContainer"}>
          <Number number={tensMins} speed={speed} />
          <Number number={onesMins} speed={speed} />
          :
          <Number number={tensSecs} speed={speed} />
          <Number number={onesSecs} speed={speed} />
        </p>
        <p>
          <Button
            text="Single Time"
            function={setSpeed}
            funcPeram={1000}
            speed={speed}
          />
          <Button
            text="Syncopated Single Time"
            function={setSpeed}
            funcPeram={666}
            speed={speed}
          />
          <Button
            text="Double Time"
            function={setSpeed}
            funcPeram={500}
            speed={speed}
          />
        </p>
        <Button
          function={togglePause}
          text={isPaused ? "Start!" : "Stop!"}
        ></Button>
      </header>
    </div>
  );
}

export default App;
