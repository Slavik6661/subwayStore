import React, { useState, useEffect } from "react";
import Search from "../../components/MainPage/search.jsx";
import Auth from "../../components/auth/auth.jsx";
const Header = () => {
  return (
    <div id="header">
      <p className="logo-Header">
        <Search />
        <Auth />
      </p>
    </div>
  );
};
export default Header;
