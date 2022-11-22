import getResponse from "./API/content";
import EventBus from "./pubSub";
import Main from "../static/components/main";
import "../static/style/navbar-menu.css";
import "../static/style/food-card.css";
import "../static/style/products-list.css";
import "../static/style/wrapper-box.css";
import "../static/style/basket.css";
import "../static/style/style-modal.css";

getResponse().then((content) => {
  const main = new Main(content);
  const html = main.render();
  document.body.insertAdjacentHTML("afterbegin", html);
  main.addListeners();
});
