function addPriceSessionsStorage(resultSummaModal, priceFood) {
  resultSummaModal = sessionStorage.getItem(
    "resultSummaModal",
    resultSummaModal
  );
  if (resultSummaModal === null) {
    sessionStorage.setItem("resultSummaModal", priceFood);
  } else {
    resultSummaModal = sessionStorage.setItem(
      "resultSummaModal",
      resultSummaModal
    );
  }
}

function addResultSummaSessionsStorage(resultSumma) {
  resultSumma = sessionStorage.getItem("resultSumma", resultSumma);
  if (resultSumma === null) {
    resultSumma = 0;
    sessionStorage.setItem("resultSumma", resultSumma);
  } else {
    resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
  }
}
