import React from "react";
import useCounter from "../../hooks/useFetch";
import "./Counter.css";

const Counter = () => {
  const [count, incrementCounter, decrementState] = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementState}>-</button>
    </div>
  );
};

export default Counter;