import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modalSum,
  addProductModalOrder,
  addIdActiveModalCard,
  allModalCardID,
} from "../../store/store.js";
let cardsActive = [];
let cardActive = [];
let orderModal = [];
let idCard = "";

const ModalCard = (props) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const menuModalCategories = useSelector((state) => state.menuModalCategories);
  const menuModalCategoriesRU = useSelector(
    (state) => state.menuModalCategoriesRU
  );
  let modalOrderObj = useSelector((state) => state.modalOrder);
  let idActiveCard = useSelector((state) => state.idModalCardActive);
  const [cardActive1, setCardActive] = useState([]);
  let modalCard = props.modalCards;
  let menuCategory = modalCard[1].categoryFillings;
  let allIdModalCards = props.modalCardID;
  let modalCardProduct = modalCard[1].productFillings;
  allIdModalCards = [];
  const selectCard = (price, id, foodName) => {
    idCard = id;
    if (
      idActiveCard[menuModalCategories] &&
      idActiveCard[menuModalCategories].includes(idCard)
    ) {
      deleteSelectedCard(price);
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
    }
  };

  const RestrictionOnAddProduct = (index) => {
    if (idActiveCard[menuModalCategories] === undefined) {
      return "selected";
    }
    if (
      menuModalCategories === "vegetables" ||
      menuModalCategories === "fillings"
    ) {
      if (
        idActiveCard[menuModalCategories] &&
        idActiveCard[menuModalCategories].length < 3
      ) {
        return addClassActiveCard(index);
      } else {
        return activeCardLimitCheck(index);
      }
    } else if (
      idActiveCard[menuModalCategories] &&
      idActiveCard[menuModalCategories].length < 1
    ) {
      return addClassActiveCard(index);
    } else {
      return activeCardLimitCheck(index);
    }
  };
  const addClassActiveCard = (index) => {
    if (
      idActiveCard[menuModalCategories] &&
      idActiveCard[menuModalCategories].includes(index)
    ) {
      return "active-modal";
    } else {
      return "selected";
    }
  };
  const activeCardLimitCheck = (index) => {
    if (
      idActiveCard[menuModalCategories] &&
      idActiveCard[menuModalCategories].includes(allIdModalCards[index])
    ) {
      return "active-modal";
    } else {
      return "disabled-modal";
    }
  };
  const deleteSelectedCard = (price) => {
    dispatch(modalSum(-price));
  };

  if (menuCategory === menuModalCategories) {
    return (
      <div id="size-selection">
        {Object.entries(modalCardProduct).map((value, index) => {
          allIdModalCards.push(index);
          return (
            <div
              key={index}
              onClick={() => selectCard(value[1].price, index, value[1].name)}
              value={index}
              id={index + "-" + menuCategory}
              className={RestrictionOnAddProduct(index)}
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
