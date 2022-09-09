function renderModalReadyOrder(customBurger,selectSize,selectSize2,modalHtml,size_selection,
    food_img,name_food,smmaPriceModal,modal_bottom, amount_food) {
        console.log('modal_bottom',modal_bottom)
for (let key in customBurger) {
    const element = `${key}: ${customBurger[key]}`
    selectSize += `<p style="margin-top: 0px;">${element}</p>`
  }

  selectSize2 = ` 
  <div class="img_food">
    <img src =${food_img} style=" background-color: white;
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
  <p>${name_food}</p>
  </div>
  `

  modalHtml = `
     ${selectSize2} 
  `

   let modal_bottom2=`
   <div class="select-amount_food"
  style="text-align: center"
   
>
    <p>Количество</p>
            <button type="button" class='amount-food-modal' id="add-food" 
            style="font-size: 24px;
            border: 0px;
            padding: 0px;
            width: 40px;
            height: 40px;
            ">+</button>

            <input type="number" id="amount-foods" name="amount-food" value=${amount_food} 
            style="
            padding: 0px;
            width: 60px;
            height:33px;
            border-bottom-width: 2px;
            margin-left: 5px;
            margin-right: 5px;
            margin-bottom: 13px;
            text-align: center;
            border-radius: 10%;
            "/>

            <button type="button" class='amount-food-modal' id="delet-food" 
            style="font-size: 24px;
            border: 0px;
            padding: 0px;
            width: 40px;
            height: 40px;
            ">-</button><br>
            </div>

            <div class="smmaPrice" 
            style="
            display: flex;
            justify-content: center";
        >
    <p>Итого:${smmaPriceModal} руб </p>
    <button type="submit" id="button-add-basket" 
    style="border: 0px;
    border-radius: 8%;
    height: 40px;
    margin-top:6px;
    background-color:#fc0;;
    font-weight: 600;
    margin-left: 10px;
   

    "> В КОРЗИНУ</button>
    </div>
    `
    window.addEventListener('click', (event) => {
      let counter =document.getElementById('amount-foods')
      console.log(event.target.id)
       if (event.target.id === 'amount-foods') {
        event.target.addEventListener('input', (event) => {
          if(event.target.value > 999){
       console.log(event.target.value)
            counter.value =999
            counter.innerText=counter.value
          }

          if(event.target.value <1){
            console.log(event.target.value)
                 counter.value =1
                 counter.innerText=counter.value
               }
      })
    }
  

      if (event.target.id === 'add-food') {

        if(counter.value <999){
        counter.innerText =  counter.value++
        }
  
      } 
  
      if (event.target.id === 'delet-food' ) {
        if(counter.value >1){
        counter.innerText =  counter.value--
        }
      }
    })

  size_selection.innerHTML = modalHtml
  modal_bottom.innerHTML=modal_bottom2


 
 return size_selection,modal_bottom
}


  