import React, { useEffect, useState } from "react";
const CounterFooter = (props) => {
  let [counter, setCounter] = useState(1);
  let idCard = props.idCard;

  useEffect(() => {
    props.onChange?.(counter);
  }, [counter]);

  return (
    <div className="counter-footer">
      <button
        type="button"
        id={"add-food-" + idCard}
        className="add-food-footer"
        onClick={() => {
          setCounter((counter += 1));
        }}
      >
        +
      </button>
      <input
        type="text"
        className="amount-food-footer"
        id={"amount-food-" + idCard}
        name="amount-food"
        value={counter}
        readOnly
      />
      <button
        type="button"
        id={"delete-food-" + idCard}
        className="delete-food-footer"
        onClick={() => {
          setCounter((counter -= 1));
        }}
      >
        -
      </button>
      <br />
    </div>
  );
};

export default CounterFooter;
