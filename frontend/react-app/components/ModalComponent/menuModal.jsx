import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalMenu = () => {
  let menuState = useSelector((state) => state.menuModalState);
  let categoriesEN = [
    "sizes",
    "breads",
    "vegetables",
    "sauces",
    "fillings",
    "ready",
  ];
  let categoriesRU = ["Размер", "Хлеб", "Овощи", "Соусы", "Начинка", "Готово"];
  return (
    <>
      {categoriesEN.map((el, index) => {
        return (
          <input
            type="button"
            key={index}
            id={el}
            className={
              menuState === index ? "active-modal-menu" : "no-active-modal-menu"
            }
            value={categoriesRU[index]}
          />
        );
      })}
    </>
  );
};
export default ModalMenu;
/* <menu id="menu-modal">
  <input
    type="button"
    id="sizes"
    className="no-active-modal-menu"
    value="Размер"
  />
  <input
    type="button"
    id="breads"
    className="no-active-modal-menu"
    value="Хлеб"
  />
  <input
    type="button"
    id="vegetables"
    className="no-active-modal-menu"
    value="Овощи"
  />
  <input
    type="button"
    id="sauces"
    className="no-active-modal-menu"
    value="Соусы"
  />
  <input
    type="button"
    id="fillings"
    className="no-active-modal-menu"
    value="Начинка"
  />
  <input
    type="button"
    id="ready"
    className="no-active-modal-menu"
    value="Готово!"
  />
</menu>; */
