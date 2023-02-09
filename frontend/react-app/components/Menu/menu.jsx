import React, { useState, useEffect } from "react";
import Menu from "../MenuComponent/menuComponent.jsx";
import Busked from "../BucketComponent/basketComponents.jsx";

const MenuComponent = () => {
  return (
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
  );
};
export default MenuComponent;
