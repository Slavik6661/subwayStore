import getResponse from "./API/content.js";
import Counter from "../static/components/FoodCounterComponent/counterComponent.js";
import Content from "../static/components/MainPage/contentRender.js";
import Basket from "../static/components/BucketComponent/basketComponents.js";
import MainModal from "../static/components/ModalComponent/mainModalComponent.js";
import "../static/style/navbar-menu.css";
import "../static/style/food-card.css";
import "../static/style/products-list.css";
import "../static/style/wrapper-box.css";
import "../static/style/basket.css";
import "../static/style/style-modal.css";

getResponse().then((content) => {
  
  let modal = new MainModal(content);
  let foodCardList = new Content(
    document.querySelector("#contentFoods"),
    modal,
    content
  );

  let basket = new Basket(
    document.querySelector("#basket-card"),
    document.querySelector("#products-list"),
    content,
    document.querySelector("#contentFoods")
  );
});
