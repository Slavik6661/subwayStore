import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterFooter from "./counterFooter.jsx";
import "../../../static/style/modalReady.css";
const ModalFooter = () => {
  const [count, setCount] = useState();
  let selectedCardInfo = useSelector((state) => state.selectedCardInfo);
  const modalSum = useSelector((state) => state.modalSum);
  let idCard = selectedCardInfo.idCard;

  const onCountChange = (count) => {
    console.log("count", count);
    setCount(count);
  };
  return (
    <>
      <div className="select-amountFood">
        <p>Количество</p>
        <CounterFooter idCard={idCard} onChange={onCountChange} />
      </div>

      <div className="summaPrice">
        <p>Итого:{modalSum} руб </p>
        <button type="submit" id="button-add-basket">
          В КОРЗИНУ
        </button>
      </div>
    </>
  );
};
export default ModalFooter;
