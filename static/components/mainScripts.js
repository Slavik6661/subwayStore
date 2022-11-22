import Menu from "../static/scripts/components/menuComponent";
import Counter from "../static/scripts/components/counterComponent";
import FoodCard from "../static/scripts/components/cardFoodComponent";
import Content from "../static/scripts/components/contentRender";
import Basket from "../static/scripts/components/basketComponents";
import Modal from "../static/scripts/components/modalComponent";
import ModalCard from "../static/scripts/components/modalCardComponent";
import ModalMenu from "../static/scripts/components/modalMenuComponent";
import BottomModal from "../static/scripts/components/bottomModalComponent";
import "../static/style/navbar-menu.css";
import "../static/style/food-card.css";
import "../static/style/products-list.css";
import "../static/style/wrapper-box.css";
import "../static/style/basket.css";
import "../static/style/style-modal.css";

async function getResponse() {
  const response = await fetch("/server/data.json", {
    method: "GET",
  });
  const content = await response.json();
  /// http://myjson.dit.upm.es/api/bins/9np0
  return content;
}

const main = new Main();

getResponse().then(() => {
  document.body.innerHTML = main.render();
  main.addListeners();
});

getResponse().then((content) => {
  new Menu(document.getElementById("menu"), content);
  const modalMenu = new ModalMenu();
  const modalCard = new ModalCard(content);

  const modal = new Modal(
    document.querySelector("#contentFoods"),
    content,
    modalCard,
    modalMenu,
  );

  new BottomModal();
  // const card = new FoodCard(content, counter);

  const contentRender = new Content(
    document.querySelector("#contentFoods"),
    card,
    modal,
  );

  const basket = new Basket(
    document.querySelector("#basket-card"),
    document.querySelector("#products-list"),
    content,
    document.querySelector("#contentFoods"),
  );
});
