import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterFooter from "./counterFooter.jsx";
import "../../../static/style/modalReady.css";
const ModalFooter = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState();
  const idOrder = useSelector((state) => state.idOrder);
  const order = useSelector((state) => state.ordersArray);
  let selectedCardInfo = useSelector((state) => state.selectedCardInfo);
  const modalSum = useSelector((state) => state.modalSum);
  let idCard = selectedCardInfo.idCard;
  let name = selectedCardInfo.name;
  let amountFood = selectedCardInfo.weight;
  let productArray = [...order];
  const addProductInBucket = () => {
    let orderObj = {
      id: idOrder,
      foodName: name,
      amountFood: count,
      foodPrice: modalSum,
    };
    productArray.push(orderObj);
    dispatch({ type: "ADD_PRODUCT_BUCKET", payload: productArray });
    dispatch({ type: "INCREMENT_ID_ORDER" });
    dispatch({ type: "MODAL_STATE", payload: false });
  };

  const onCountChange = (count) => {
    console.log("count", count);
    setCount(count);
  };

  return (
    <>
      <div className="select-amountFood">
        <p>Количество</p>
        <CounterFooter
          idCard={idCard}
          onChange={onCountChange}
          foodCount={amountFood}
        />
      </div>

      <div className="summaPrice">
        <p>Итого:{modalSum} руб </p>
        <button
          type="submit"
          id="button-add-basket"
          onClick={() => addProductInBucket()}
        >
          В КОРЗИНУ
        </button>
      </div>
    </>
  );
};
export default ModalFooter;
