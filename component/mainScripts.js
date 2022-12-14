import getResponse from "./API/content";
import Main from "../static/components/main";
import "../static/style/navbar-menu.css";
import "../static/style/food-card.css";
import "../static/style/products-list.css";
import "../static/style/wrapper-box.css";
import "../static/style/basket.css";
import "../static/style/style-modal.css";
import "../static/style/auth.css";

getResponse().then((content) => {
  content = { ...content[0] };
  const main = new Main(content);
  const html = main.render();
  document.body.insertAdjacentHTML("afterbegin", html);
  main.addListeners();
});
