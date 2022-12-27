import React, { useEffect, useState } from "react";
import MainContent from "./components/MainPage/contentRender.jsx";
import Menu from "./components/MenuComponent/menuComponent.jsx";
import Counter from "./components/FoodCounterComponent/counterComponent.jsx";
import getProducts from "../component/API/products";
import "../static/style/wrapper-box.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(({ menu, filings }) => {
      console.log(menu, filings);
      setProducts({ ...menu[0], ...filings[0] });
    });
  }, []);
  console.log(products);

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
            {"basket"}
          </div>
        </div>
      </div>
      <div id="contentFoods">
        <MainContent foodData={products} />
      </div>
    </div>
  );
};

export default App;
