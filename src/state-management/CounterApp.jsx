// React hooks = Special function that allows functional components to use React features without class components.

// useState() = A react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM.

import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // setCounter(counter++); // passing the current value of counter to setCounter and then incrementing it.

  // React updates based on the original value,and the state won't change as expected.
  // counter++ also modifies the variable directly by reassigning the value, so counter should not be const
    
  // setCounter(++counter); // this will works when counter is not const

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const toggleButton = () => {
    setShow(!show);
  };

  return (
    <div className="text-center">
      <p>Counter: {counter}</p>
      <div className="space-x-4">
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      <p>Show value: {show.toString()}</p>
      <button onClick={toggleButton}>Toggle Show</button>
    </div> 
  );
};

export default CounterApp;
