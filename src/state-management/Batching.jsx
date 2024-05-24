import { useState } from "react";

function BatchingExample () {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <>
      <h1>Without using updater function:</h1>
      <p>{number}</p>
      <button onClick={() => {
        setNumber(number + 1); // setNumber(0 + 1);
        setNumber(number + 1); // setNumber(0 + 1);
        setNumber(number + 1); // setNumber(0 + 1);
      }}>+3</button>

      <h1>Using updater function:</h1>
      <h1>{number2}</h1>
      <button onClick={() => {
        setNumber2(n => n + 1);
        setNumber2(n => n + 1);
        setNumber2(n => n + 1);
      }}>+3</button>
    </>
  );
}

export default BatchingExample;
