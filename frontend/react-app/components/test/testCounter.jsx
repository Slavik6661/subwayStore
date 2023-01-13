import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const valueCounter = useSelector((state) => state.value);
  const click = () => {
    console.log();
    dispatch({ type: "INCREMENT" });
  };
  const Multiply = () => {
    console.log();
    dispatch({ type: "Multiply" });
  };

  return (
    <>
      <button onClick={() => click()}>+</button>
      <input type="number" value={valueCounter} />
      <button onClick={() => Multiply()}>-</button>
    </>
  );
};
export default Counter;
