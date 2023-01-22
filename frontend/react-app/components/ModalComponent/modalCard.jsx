import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modalSum,
  addProductModalOrder,
  addIdActiveModalCard,
} from "../../store/store.js";
let cardsActive = [];
let cardActive = [];
let orderModal = [];

let idCard = "";
const ModalCard = (props) => {
  const dispatch = useDispatch();
  const menuModalCategories = useSelector((state) => state.menuModalCategories);
  const menuModalCategoriesRU = useSelector(
    (state) => state.menuModalCategoriesRU
  );
  let modalOrderObj = useSelector((state) => state.modalOrder);
  let idActiveCard = useSelector((state) => state.idModalCardActive);
  const [cardActive1, setCardActive] = useState([]);
  let modalCard = props.modalCards;
  let menuCategory = modalCard[0];
  let cardProductDiscretion = modalCard[1];

  const selectCard = (price, id, foodName) => {
    idCard = id;
    if (
      idActiveCard[menuModalCategories] &&
      idActiveCard[menuModalCategories].includes(idCard)
    ) {
      deleteSelectedCard(price);
      console.log(cardActive);
      let idFromDelete = cardActive.indexOf(idCard);
      cardActive.splice(idFromDelete, 1);
      orderModal.splice(idFromDelete, 1);
      setCardActive([...cardActive]);
      idActiveCard[menuModalCategories] = cardActive;
      dispatch(addIdActiveModalCard(idActiveCard));
      modalOrderObj[menuModalCategoriesRU] = orderModal;
      dispatch(addProductModalOrder(modalOrderObj));
    } else {
      if (!Object.keys(idActiveCard).includes(menuModalCategories)) {
        orderModal = [];
        cardActive = [];
        console.log("array is empty");
      } else {
      }
      cardsActive = [...cardActive1, idCard];
      setCardActive(cardsActive);

      cardActive.push(idCard);
      idActiveCard[menuModalCategories] = cardActive;
      dispatch(addIdActiveModalCard(idActiveCard));
      orderModal.push(foodName);
      modalOrderObj[menuModalCategoriesRU] = orderModal;
      dispatch(modalSum(price));
      console.log("Отправлена форма.", price);
    }

    console.log(modalOrderObj);
    console.log(idActiveCard);
  };

  const deleteSelectedCard = (price) => {
    dispatch(modalSum(-price));
    console.log("Отправлена форма22.", price);
  };
  if (menuCategory === menuModalCategories) {
    return (
      <div id="size-selection">
        {Object.entries(cardProductDiscretion).map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => selectCard(value[1].price, index, value[1].name)}
              value={index}
              id={index + "-" + menuCategory}
              className={
                idActiveCard[menuModalCategories] &&
                idActiveCard[menuModalCategories].includes(index)
                  ? "active-modal"
                  : "selected"
              }
            >
              <div className="background">
                <img src={"/static/" + value[1].image} />
              </div>
              <p>{value[1].name}</p>
              <hr />
              <p>{value[1].price} руб</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default ModalCard;
