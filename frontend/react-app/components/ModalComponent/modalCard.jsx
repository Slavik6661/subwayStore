import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSum, addProductModalOrder, addIdActiveModalCard, allModalCardID } from "../../store/store.js";
let cardsActive = [];
let cardActive = [];
let orderModal = [];
let idCard = "";

// CHECK
const ModalCard = (props) => {
  const dispatch = useDispatch();

  const menuModalCategories = useSelector((state) => state.menuModalCategories);
  const menuModalCategoriesRU = useSelector((state) => state.menuModalCategoriesRU);
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
    if (!Object.keys(idActiveCard).includes(menuModalCategories)) {
      modalOrderObj[menuModalCategoriesRU] = [];
      idActiveCard[menuModalCategories] = [];
      console.log("array is empty");
    }

    if (idActiveCard[menuModalCategories]?.includes(idCard)) {
      deleteSelectedCard(price);
      let idFromDelete = idActiveCard[menuModalCategories].indexOf(idCard);
      idActiveCard[menuModalCategories].splice(idFromDelete, 1);
      modalOrderObj[menuModalCategoriesRU].splice(idFromDelete, 1);
      setCardActive([...cardActive]);
      dispatch(addIdActiveModalCard(idActiveCard));
      dispatch(addProductModalOrder(modalOrderObj));
    } else {
      cardsActive = [...cardActive1, idCard];
      setCardActive(cardsActive);

      if (idActiveCard[menuModalCategories]?.length === 0) {
        cardActive = [];
        cardActive.push(idCard);
        idActiveCard[menuModalCategories] = cardActive;

        orderModal = [];
        orderModal.push(foodName);
        modalOrderObj[menuModalCategoriesRU] = orderModal;
      } else {
        idActiveCard[menuModalCategories] = [...idActiveCard[menuModalCategories], idCard];
        modalOrderObj[menuModalCategoriesRU] = [...modalOrderObj[menuModalCategoriesRU], foodName];
      }

      dispatch(addIdActiveModalCard(idActiveCard));

      dispatch(addProductModalOrder(modalOrderObj));

      dispatch(modalSum(price));
    }
    console.log(idActiveCard);
  };

  // const RestrictionOnAddProduct = (index) => {
  //   if (idActiveCard[menuModalCategories] === undefined) {
  //     return "selected";
  //   }
  //   if (menuModalCategories === "vegetables" || menuModalCategories === "fillings") {
  //     if (idActiveCard[menuModalCategories]?.length < 3) {
  //       return addClassActiveCard(index);
  //     } else {
  //       return activeCardLimitCheck(index);
  //     }
  //   } else if (idActiveCard[menuModalCategories]?.length < 1) {
  //     return addClassActiveCard(index);
  //   } else {
  //     return activeCardLimitCheck(index);
  //   }
  // };

  const addClassActiveCard = (index) => {
    if (idActiveCard[menuModalCategories]?.includes(index)) {
      return "active-modal";
    } else {
      return "selected";
    }
  };
  const activeCardLimitCheck = (index) => {
    if (idActiveCard[menuModalCategories]?.includes(allIdModalCards[index])) {
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

          let selectCardLimit =
            menuModalCategories === "vegetables" || menuModalCategories === "fillings" ? 2 : 0;

          let classes =
            idActiveCard[menuModalCategories]?.length > selectCardLimit
              ? activeCardLimitCheck(index)
              : addClassActiveCard(index);

          return (
            <div
              key={index}
              onClick={() => selectCard(value[1].price, index, value[1].name)}
              value={index}
              id={index + "-" + menuCategory}
              className={classes ?? "selected"}
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
