import { useState } from "react";
const useCounter = (
  initialState = 0,
  iterationState = 1,
  maximumState = 0,
  minimumState = 0
) => {
  const [count, setCount] = useState(initialState);
  const maximum = count + iterationState;
  const minumum = count - iterationState;

  const incrementState = () => {
    if (maximumState === 0) {
      return setCount((prevState) => {
        return prevState + iterationState;
      });
    }
    if (maximum <= maximumState) {
      setCount((prevState) => {
        return prevState + iterationState;
      });
    }
  };
  const decrementState = () => {
    if (minimumState === 0) {
      if (minumum >= 0)
        return setCount((prevState) => {
          return prevState - iterationState;
        });
    }
    if (minumum >= minimumState) {
      setCount((prevState) => {
        return prevState - iterationState;
      });
    }
  };
  return [count, incrementState, decrementState];
};
export default useCounter;
