import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "./components/MainPage/contentRender.jsx";
import Menu from "./components/MenuComponent/menuComponent.jsx";
import Busked from "./components/BucketComponent/basketComponents.jsx";
import { getProducts, getMenu } from "../component/API/products";
import "../static/style/wrapper-box.css";
import MainModal from "./components/ModalComponent/mainModal.jsx";

const App = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal); // rename
  const menuProducts = useSelector((state) => state.menuItems); // rename
  const ingredients = useSelector((state) => state.products); // rename
  console.log(ingredients);
  console.log(menuProducts);
  // useEffect(() => {
  //   getProducts().then(({ menu, filings }) => {
  //     console.log(menu, filings);
  //     setProducts({ ...menu[0], ...filings[0] });
  //     setModal(filings[0]);
  //   });
  // }, []);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getMenu());
  }, []);
  return (
    <div className="wrapper">
      <div id="header">
        <p className="logo-Header">
          Сделай заказ
          <button id="auth" className="auth"></button>
        </p>
      </div>
      <div id="menu">
        <nav className="navbar-menu" id="menu">
          <Menu />
        </nav>

        <div id="basket-card">
          <div id="basket" className="basket-products">
            <Busked />
          </div>
        </div>
      </div>
      <div id="contentFoods">
        {showModal && <MainModal />}

        <MainContent />
      </div>
    </div>
  );
};

export default App;
