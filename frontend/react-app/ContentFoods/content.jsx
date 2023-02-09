import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainModal from "../components/ModalComponent/mainModal.jsx";
import MainContent from "../components/MainPage/contentRender.jsx";
const Content = () => {
  const showModal = useSelector((state) => state.showModal);
  return (
    <div id="contentFoods">
      {showModal && <MainModal />}
      <MainContent />
    </div>
  );
};
export default Content;
