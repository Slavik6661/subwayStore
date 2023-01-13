import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalCard from "./modalCard.jsx";
import "../../../static/style/style-modal.css";

const MainModal = (props) => {
  const dispatch = useDispatch();
  const modalWindow = useSelector((state) => state.modalWindow);
  const [stateModalMenu, setModalMenu] = useState(0);

  let modalMenu = props.modalMenu;
  // for (let [key, value] of Object.entries(modalMenu)) {
  //   if (key === "sizes") {
  //     console.log(key, value);
  //   }
  // }
  const menuModal = Object.entries(modalMenu);
  console.log(menuModal);
  menuModal.map((key, value) => {
    if (key[0] === "sizes") {
      console.log(key[1]);
    }
  });
  const closeModal = () => {
    dispatch({ type: "MODAL_STATE", payload: false });
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
            <div className="button-next-Ingredients">
              <input type="button" id="back" value="< НАЗАД" />
              <input type="button" id="next" value="ВПЕРЕД >" />
            </div>

            <div id="size-selection">
              {menuModal.map((item, i) => (
                <ModalCard modalMenuItem={item} active={stateModalMenu === i} />
              ))}
              {/* <ModalCard modalMenuItem={menuModal} /> */}
            </div>
            <div id="modal-bottom">
              <p>Итого: руб</p>
            </div>
          </form>
        </dialog>
      </div>
    </>
  );
};

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
export default MainModal;
