 function setSandwichesInOrder(order,customBurger) {
    this.order=order
    
    localStorageOreder = JSON.parse(localStorage.getItem('order'))
    console.log(customBurger)

    if (localStorageOreder == null) {
      this.order.push(customBurger)
      console.log(this.order)
      localStorage.setItem('order', JSON.stringify(this.order))
      return this.order
    }
    else {

      this.order = localStorageOreder
      localStorage.setItem('order', JSON.stringify(this.order))
      this.order.push(customBurger)
      localStorage.setItem('order', JSON.stringify(this.order))
      return this.order
    }


  }