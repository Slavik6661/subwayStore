import Menu from "./MenuComponent/menuComponent";
import Content from "./MainPage/contentRender";
import Bucket from "./BucketComponent/basketComponents";
import store from "../store";
import EventBus from "../../componentss/pubSub";

class Main {
  menu;

  mainContent;

  bucket;

  constructor(content) {
    this.content = content;
    this.menu = new Menu(this.content);
    this.mainContent = new Content(this.content);
    this.bucket = new Bucket(document.querySelector("#basket-card"));
    EventBus.subscribe("menuValue", this.rerender.bind(this));
  }

  rerender(menuValue) {
    this.mainContent.rerender(menuValue);
    this.menu.rerender();
    this.addListeners();
  }

  render(menuValue) {
    let html = "";
    html = /* html */ `
    <div class="wrapper">
      <div id="box1">
        <p>Сделай заказ</p>
      </div>
      <div id="box2">
        <nav class="navbar-menu" id="menu">
          ${this.menu.render()}
        </nav>
        <div id="basket-card">
          <div id="basket" class="basket-products">
            ${this.bucket.render()}
          </div>
        </div>
        <div id="contentFoods">
          ${this.mainContent.render(menuValue)}
        </div>
      </div>
    </div>
    `;

    return html;
  }

  addListeners() {
    const menuHtml = document.querySelector("#menu");
    this.menu.eventlistener(menuHtml);
    this.mainContent.contentListners(document.querySelector("#contentFoods"));
  }
}
export default Main;
