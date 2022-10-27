class Counter {
  htmlDiv = "";
  i = 0;
  state = {
    counter: 1,
  };

  constructor() {
    this.render();
  }

  render() {
    const html = /*html*/ `
        <button type="button" id="add-food-${this.i}">+</button>
        <input  type="number" class='amount-food' id="amount-food-${this.i}" name="amount-food" value='1'/>
        <button type="button" id="delete-food-${this.i}">-</button><br>
      `;
    this.htmlDiv = document.createElement("div");
    this.htmlDiv.className = "counter-1";
    this.htmlDiv.innerHTML = html;
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
    this.i++;
    return this.htmlDiv;
  }
}
let counter = new Counter();
export default counter;
