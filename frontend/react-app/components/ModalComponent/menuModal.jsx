import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const ModalMenu = () => {
  let menuState = useSelector((state) => state.menuModalState);
  const menuCategory = useSelector((state) => state.menuCategory);
  let categoriesEN = ["sizes", "breads", "vegetables", "sauces", "fillings", "ready"];
  let categoriesRU = ["Размер", "Хлеб", "Овощи", "Соусы", "Начинка", "Готово"];

  return (
    <>
      {categoriesEN.map((el, index) => {
        return (
          <input
            type="button"
            key={index}
            id={el}
            className={menuState === index ? "active-modal-menu" : "no-active-modal-menu"}
            value={categoriesRU[index]}
          />
        );
      })}
    </>
  );
};
export default ModalMenu;
