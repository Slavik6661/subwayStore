import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "./components/MainPage/contentRender.jsx";
import Menu from "./components/MenuComponent/menuComponent.jsx";
import Busked from "./components/BucketComponent/basketComponents.jsx";
import Auth from "./components/auth/auth.jsx";
import { getProducts, getMenu } from "../component/API/products";
import "../static/style/wrapper-box.css";
import MainModal from "./components/ModalComponent/mainModal.jsx";
import Search from "./components/MainPage/search.jsx";

const App = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal);
  const product = useSelector((state) => state.products);
  const menuItem = useSelector((state) => state.menuItems);

  console.log(product);
  console.log(menuItem);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getMenu());
  }, []);
  return (
    <div className="wrapper">
      <div id="header">
        <p className="logo-Header">
          <Search />
          <Auth />
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
