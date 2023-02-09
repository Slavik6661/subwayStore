import React, { useState, useEffect } from "react";
import Header from "./components/Header/header.jsx";
import MenuComponent from "./components/Menu/menu.jsx";
import Content from "./ContentFoods/content.jsx";
import "../static/style/wrapper-box.css";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <MenuComponent />
      <Content />
    </div>
  );
};

export default App;
