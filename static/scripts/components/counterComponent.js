//  class Button {
//   counter;
//   #state = {
//     counter: 0,
//   };

//   constructor(counter) {
//     console.log("------------------");
//     this.counter = counter;
//     this.render();
//   }

//   /**
//    * @param {{ counter: number; }} newState
//    */
//   set stateSet(newState) {
//     console.log("set state", newState);
//     this.#state = newState;
//     this.render();
//   }

//   increment() {
//     this.stateSet = {
//       ...this.stateSet,
//       counter: this.#state.counter + 1,
//     };
//   }

//   decrement() {
//     this.#state.counter > 1
//       ? (this.stateSet = {
//           ...this.stateSet,
//           counter: this.#state.counter - 1,
//         })
//       : "";
//   }

//   render() {
//     const html = /*html*/ `
//     <div>
//     <button id="button-add" style="width: 100px; height: 100px; font-size: 50px">+</button>
//     <input id='countValue' value = '${
//       this.#state.counter
//     }' style="width: 200px; height: 94px; font-size: 50px ;text-align: center;"></input>
//     <button id="button-del" style="width: 100px; height: 100px; font-size: 50px">-</button>
//     </div>
//     `;

//     this.counter.innerHTML = html;

//     this.counter
//       .querySelector("#button-add")
//       .addEventListener("click", this.increment.bind(this));

//     this.counter
//       .querySelector("#button-del")
//       .addEventListener("click", this.decrement.bind(this));
//   }
// }

// const counter = document.querySelector("#counter");

// const button = new Button(root);
