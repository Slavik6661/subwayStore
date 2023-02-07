import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalCardReady = () => {
  const modalOrderObj = useSelector((state) => state.modalOrder);
  let selectedCardInfo = useSelector((state) => state.selectedCardInfo);
  console.log(selectedCardInfo.image);
  Object.entries(modalOrderObj).map((element) => {
    console.log(element);
  });
  return (
    <div className="ready">
      <div className="img_food">
        <img className="img_food-modal" src={"/static/" + selectedCardInfo.image} />
      </div>
      <div className="info">
        <p>Ваш {<b>{selectedCardInfo.name}</b>} сендвич готов!</p>
        <hr />
        {Object.entries(modalOrderObj).map((element, i) => (
          <p key={i}>
            {" "}
            <b>{element[0]}</b> - {element[1] + ","}
          </p>
        ))}
        <hr />
      </div>
    </div>
  );
};
export default ModalCardReady;
