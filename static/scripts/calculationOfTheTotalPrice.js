function calculationOfTheTotalPrice(
  basketProducts,
  renderBasket,
  resultSummaBasketHTML,
  priceFood
) {
  resultSumma = sessionStorage.getItem("resultSumma");
  resultSumma = Number(resultSumma);
  resultSumma = Number(resultSumma) + Number(priceFood);
  resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
  resultSumma = sessionStorage.getItem("resultSumma");
  console.log("!!", resultSumma);
  basketProducts.innerHTML += `${renderBasket}<br>`;
  resultSummaBasketHTML.innerText = `Итого: ${resultSumma} руб`;
  return resultSummaBasketHTML;
}

function calculationOfTheTotalPriceModal(
  basketProducts,
  renderBasket,
  resultSummaBasketHTML
) {
  let resultSummaModal = sessionStorage.getItem("resultSummaModal");
  resultSummaModal = Number(resultSummaModal);
  console.log("resultSummaModal", resultSummaModal);

  resultSumma = sessionStorage.getItem("resultSumma");
  resultSumma = Number(resultSumma);
  console.log("resultSumma", resultSumma);

  resultSumma = Number(resultSumma) + Number(resultSummaModal);
  resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
  resultSumma = sessionStorage.getItem("resultSumma");

  basketProducts.innerHTML += `${renderBasket}<br>`;
  resultSummaBasketHTML.innerText = `Итого: ${resultSumma} руб`;

  return resultSummaBasketHTML;
}
