import Menu from "../static/scripts/components/menuComponent.js";
import Counter from "../static/scripts/components/counterComponent.js";
import FoodCard from "../static/scripts/components/cardFoodComponent.js";
import Content from "../static/scripts/components/contentRender.js";
import Basket from "../static/scripts/components/basketComponents.js";
import Modal from "../static/scripts/components/modalComponent.js";
import ModalCard from "../static/scripts/components/modalCardComponent.js";
import ModalMenu from "../static/scripts/components/modalMenuComponent.js";
import BottomModal from "../static/scripts/components/bottomModalComponent.js";
import "../static/style/navbar-menu.css";
import "../static/style/food-card.css";
import "../static/style/products-list.css";
import "../static/style/wrapper-box.css";
import "../static/style/basket.css";
import "../static/style/style-modal.css";

async function getResponse() {
  let response = await fetch("/server/data.json", {
    method:'GET'
  });
  let content = await response.json();
  /// http://myjson.dit.upm.es/api/bins/9np0
  return content;
}

getResponse().then((content) => {
  let counter = new Counter();
  new Menu(document.getElementById("menu"), content);
  let modalMenu = new ModalMenu();
  let modalCard = new ModalCard(content);

  let modal = new Modal(
    document.querySelector("#contentFoods"),
    content,
    modalCard,
    modalMenu
  );

  new BottomModal();
  let card = new FoodCard(content, counter);

  let contentRender = new Content(
    document.querySelector("#contentFoods"),
    card,
    modal
  );

  let basket = new Basket(
    document.querySelector("#basket-card"),
    document.querySelector("#products-list"),
    content,
    document.querySelector("#contentFoods")
  );
});
