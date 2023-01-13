import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from "./components/MainPage/contentRender.jsx";
import Menu from "./components/MenuComponent/menuComponent.jsx";
import Busked from "./components/BucketComponent/basketComponents.jsx";
import getProducts from "../component/API/products";
import "../static/style/wrapper-box.css";
import MainModal from "./components/ModalComponent/mainModal.jsx";

const App = () => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState([]);
  const modalWindow = useSelector((state) => state.modalWindow);
  const modalData = [];
  useEffect(() => {
    getProducts().then(({ menu, filings }) => {
      console.log(menu, filings);
      setProducts({ ...menu[0], ...filings[0] });
      setModal(filings[0]);
    });
  }, []);

  console.log(modal);

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
          <Menu menuItems={products.menu} />
        </nav>

        <div id="basket-card">
          <div id="basket" className="basket-products">
            <Busked />
            {/* <Counter /> */}
          </div>
        </div>
      </div>
      <div id="contentFoods">
        {modalWindow && <MainModal modalMenu={modal} />}

        <MainContent foodData={products} />
      </div>
    </div>
  );
};

export default App;
