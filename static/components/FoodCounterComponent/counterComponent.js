import store from "../../store";

class Counter {
  htmlDiv = "";

  state = {
    counter: 1,
  };

  html = "";

  constructor() {
    this.render();
  }

  render(idCard) {
    this.html = /* html */ `
    <div class="counter-1">
        <button type="button" id="add-food-${idCard}" class="add-food">+</button>
        <input  type="number" class='amount-food' id="amount-food-${idCard}" name="amount-food" value='1'/>
        <button type="button" id="delete-food-${idCard}"class="delete-food">-</button><br>
    </div>  
        `;
    return this.html;
  }

  addEventListeners(idCard, root) {
    root
      .querySelector(`#add-food-${idCard}`)
      .addEventListener("click", () => {
        store.productsFromTheCurrentPage[idCard].weight += 1;
        this.state.counter = store.productsFromTheCurrentPage[idCard].weight;
        const htmlCounter = root.querySelector(`#amount-food-${idCard}`);
        htmlCounter.value = this.state.counter;
      });

    root
      .querySelector(`#delete-food-${idCard}`)
      .addEventListener("click", () => {
        if (this.state.counter > 1) { store.productsFromTheCurrentPage[idCard].weight -= 1; }
        this.state.counter = store.productsFromTheCurrentPage[idCard].weight;
        const htmlCounter = root.querySelector(`#amount-food-${idCard}`);
        htmlCounter.value = this.state.counter;
      });
  }
}
export default Counter;
