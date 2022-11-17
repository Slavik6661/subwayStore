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
    this.html = /*html*/ `
        <button type="button" id="add-food-${idCard}" class="add-food">+</button>
        <input  type="number" class='amount-food' id="amount-food-${idCard}" name="amount-food" value='1'/>
        <button type="button" id="delete-food-${idCard}"class="delete-food">-</button><br>
      `;
    this.htmlDiv = document.createElement("div");
    this.htmlDiv.className = "counter-1";
    this.htmlDiv.innerHTML = this.html;
    return this.htmlDiv;
  }

  addEventListeners(idCard) {
    console.log(this.htmlDiv.querySelector(`#add-food-${idCard}`));
    this.htmlDiv
      .querySelector(`#add-food-${idCard}`)
      .addEventListener("click", () => {
        console.log("click");
      });
  }
}
export default Counter;

//console.log(this.htmlDiv);
// this.htmlDiv
//   .querySelector(`#add-food-${this.i}`)
//   .addEventListener(
//     "click",
//     this.increment.bind(this),
//     console.log("click")
//   );

// this.htmlDiv
//   .querySelector("#delete-food")
//   .addEventListener("click", this.decrement.bind(this));
