function bottomModalPrice(
  summaPriceModalHTML,
  modalBottom,
  resultSummaModal,
  priceElementFoodModal
) {
  resultSummaModal = sessionStorage.getItem("resultSummaModal");
  if (resultSummaModal === "0") {
    console.log(resultSummaModal + "+" + priceElementFoodModal);
    sessionStorage.setItem("resultSummaModal", priceElementFoodModal);
    summaPriceModalHTML = `<p>Итого:${priceElementFoodModal} руб</p> `;
    modalBottom.innerHTML = summaPriceModalHTML;
    return modalBottom;
  } 
    resultSummaModal = +resultSummaModal;
    console.log(resultSummaModal + "+" + priceElementFoodModal);
    sessionStorage.setItem("resultSummaModal", resultSummaModal);
    summaPriceModalHTML = `<p>Итого:${resultSummaModal} руб</p> `;
    modalBottom.innerHTML = summaPriceModalHTML;
    return modalBottom;
  
}
