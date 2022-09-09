function calculationOfTheTotalPrice(basket_products,renderBasket,price_food,summa,resultSumma) {
    basket_products.innerHTML += `${renderBasket}<br>`
    console.log(price_food)
    console.log(summa)
    resultSumma.innerText = `Итого: ${summa} руб`
 

    return resultSumma
  }