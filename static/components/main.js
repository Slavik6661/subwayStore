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
    this.bucket = new Bucket(
      document.querySelector("#basket-card"),
      document.querySelector("#products-list")
    );
    EventBus.subscribe("menuValue", this.update.bind(this));
  }

  update(menuValue) {
    this.mainContent.upRender(menuValue);
    this.menu.upRender();
    this.addListeners();
  }

  render(menuValue) {
    console.log("1");
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
  }
}
export default Main;
