function renderModalReadyOrder(
  customBurger,
  selectSize,
  selectSize2,
  modalHtml,
  sizeSelection,
  foodImg,
  nameFood,
  summaPriceModal,
  modalBottom,
  amountFood
) {
  console.log("modalBottom", modalBottom);
  let resultSummaModal = sessionStorage.getItem("resultSummaModal");
  for (let key in customBurger) {
    const element = `${key}: ${customBurger[key]}`;
    selectSize += `<p style="margin-top: 0px;">${element}</p>`;
  }

  selectSize2 = /*html*/ ` 
  <div class="img_food">
    <img src =${foodImg} style=" background-color: white;
      border-radius: 100px;
      width: 165px;
      height: 166px;
      margin-top: 10px;">

    </div>
  <div class=info>
 
  <p style="margin-top: 0px;">Ваш сендвич готов!</p>
  <hr>
  <p style="margin-top: 0px;">${selectSize}
  <hr>
  <p>${nameFood}</p>
  </div>
  `;

  modalHtml = `
     ${selectSize2} 
  `;

  let modalBottom2 = /*html*/ `
   <div class="select-amountFood">
    <p>Количество</p>

            <button type="button" id="add-foods">+</button>

            <input type="number" class="amount-foods-modal"  id="amount-foods"
             name="amount-food" value=${amountFood}> </input>

            <button type="button" id="delete-foods">-</button><br>
            </div>

            <div class="summaPrice">
    <p>Итого:${resultSummaModal} руб </p>
    <button type="submit" id="button-add-basket"> В КОРЗИНУ</button>
    </div>`;

  window.addEventListener("click", (event) => {
    let counter = document.getElementById("amount-foods");

    if (event.target.id === "amount-foods") {
      event.target.addEventListener("input", (event) => {
        if (event.target.value > 999) {
          console.log(event.target.value);
          counter.value = 999;
          counter.innerText = counter.value;
        }

        if (event.target.value < 1) {
          console.log(event.target.value);
          counter.value = 1;
          counter.innerText = counter.value;
        }
      });
    }

    if (event.target.id === "add-foods") {
      if (counter.value < 999) {
        counter.innerText = counter.value++;
        console.log(counter);
      }
    }

    if (event.target.id === "delete-foods") {
      if (counter.value > 1) {
        counter.innerText = counter.value--;
        console.log(counter);
      }
    }
  });

  sizeSelection.innerHTML = modalHtml;
  /* modalBottom.style =
    "margin-top: 150px;height: 168px; background-color: rgb(255, 255, 255);";*/
  modalBottom.innerHTML = modalBottom2;

  return sizeSelection, modalBottom;
}
