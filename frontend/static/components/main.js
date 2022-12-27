import Menu from "./MenuComponent/menuComponent";
import Content from "./MainPage/contentRender";
import Bucket from "./BucketComponent/basketComponents";
import Auth from "./auth/auth";
import EventBus from "../../component/pubSub";

class Main {
  menu;

  auth;

  mainContent;

  bucket;

  constructor(content) {
    this.content = content;
    this.menu = new Menu(this.content);
    this.mainContent = new Content(this.content);
    this.auth = new Auth();
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
      <div id="header">
        <p class='logo-Header'>Сделай заказ!!!!
        <button id='auth' class='auth' ></button>
        </p>
       
      </div>
      <div id="menu">
        <nav class="navbar-menu" id="menu">
          ${this.menu.render()}
        </nav>
        </div>
        <div id="basket-card">
          <div id="basket" class="basket-products">
            ${this.bucket.render()}
          </div>
        </div>
        <div id="contentFoods">
          ${this.mainContent.render(menuValue)}
        </div>
      
    </div>
    `;

    return html;
  }

  addListeners() {
    const menuHtml = document.querySelector("#menu");
    this.menu.eventlistener(menuHtml);
    this.mainContent.contentListners(document.querySelector("#contentFoods"));
    this.auth.eventListeners();
    this.bucket.eventListener();
  }
}
export default Main;
