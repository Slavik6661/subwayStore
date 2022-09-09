function loadingCartData(basket_products,resultSumma) {
    console.log(basket_products);
    let summa=0
    window.addEventListener('load', () => {

      localStorageOreder = localStorage.getItem('order')
      localStorageOreder = JSON.parse(localStorageOreder)
      orderID = 0
      if (localStorageOreder !== null) {
        for (let key in localStorageOreder) {
          let value = localStorageOreder[key];

          let cardItemHTML = `
          <div class="order" id='order'>
            <p>${value.name}</p> 
            <p>${value.amount}</p>
            
            <button id="delete_products" data-order=${orderID}>X</button>
          <div>
          `
          summa=summa+ +value.price
          basket_products.innerHTML += `${cardItemHTML}<br>`
          orderID++
        }
  
    resultSumma.innerText = `Итого: ${summa} руб`  

      }

    });
    return basket_products
  }