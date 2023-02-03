import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCard from "./modalCard.jsx";
import ModalMenu from "./menuModal.jsx";
import ModalCardReady from "./modalReady.jsx";
import ModalFooter from "./moalFooter.jsx";
import "../../../static/style/style-modal.css";
import {
  getNewModalState,
  getNewModalCategory,
  addIdActiveModalCard,
} from "../../store/store.js";
const MainModal = () => {
  const dispatch = useDispatch();
  const stateModal = useSelector((state) => state.menuModalState);
  const categoriesEN = useSelector((state) => state.categoriesEN);
  const menuModalCategories = useSelector((state) => state.menuModalCategories);
  const modalSum = useSelector((state) => state.modalSum);
  const ingredients = useSelector((state) => state.products);
  let idActiveCard = useSelector((state) => state.idModalCardActive);
  let allIdModalCards = [];

  //console.log(store.getState());
  const Next = () => {
    if (categoriesEN.length > stateModal + 1) {
      dispatch(getNewModalState(1));
      dispatch(getNewModalCategory(stateModal + 1));
      allIdModalCards = [];
    }
  };
  const Back = () => {
    if (stateModal > 0) {
      dispatch(getNewModalState(-1));
      dispatch(getNewModalCategory(stateModal - 1));
    }
  };
  const menuModalIngredients = Object.entries(ingredients);
  const closeModal = () => {
    console.log(idActiveCard);
    dispatch(getNewModalState(-stateModal));
    dispatch(getNewModalCategory(stateModal));
    dispatch({ type: "MODAL_STATE", payload: false });
    dispatch(addIdActiveModalCard({}));
  };
  return (
    <>
      <div id="modal-overlay" className="modal-overlay">
        <dialog id="modal-content">
          <div id="modal-top">
            <input
              type="button"
              name="close-modal"
              id="close-modal"
              value="X"
              onClick={() => closeModal()}
            />
          </div>
          <form method="dialog" className="modal-form">
            <menu id="menu-modal">
              <ModalMenu />
            </menu>
            <div className="button-next-Ingredients">
              <input
                type="button"
                id="back"
                value="< НАЗАД"
                onClick={() => Back()}
              />
              <input
                type="button"
                id="next"
                value="ВПЕРЕД >"
                onClick={() => Next()}
              />
            </div>
            <div>
              {menuModalCategories === "ready" ? (
                <ModalCardReady />
              ) : (
                menuModalIngredients.map((item, i) => (
                  <ModalCard
                    modalCards={item}
                    modalCardID={allIdModalCards}
                    key={i}
                  />
                ))
              )}
            </div>
            <div id="modal-bottom">
              {menuModalCategories === "ready" ? (
                <ModalFooter />
              ) : (
                <p>Итого:{modalSum} руб</p>
              )}
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};
export default MainModal;
// const menuActive = () => {
//   const menuModalActive = document.querySelectorAll("#menu-modal input");
//   console.log(menuModalActive);
//   const menuActive = [];
//   menuModalActive.forEach((element) => {
//     menuActive.push(element);
//   });
//   menuActive[0].className = "active-modal-menu";
// };
// menuActive();
