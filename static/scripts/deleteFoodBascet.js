 function deletFood() {
    localStorageOreder = localStorage.getItem('order')
    let array=[]
    let array2=[]
    let idElement
    localStorageOreder = JSON.parse(localStorageOreder)
   
    if (event.target.id === 'delete_products') {
    
      
      idOrder= +event.target.dataset.order
      idOrder=+idOrder
      
      localStorageOreder.forEach((element,index)=>{
       
        array.push(element)
        
              
      })

      array.splice(+idOrder,1)
           
      console.log(array)
      localStorage.setItem("order",JSON.stringify(array))  
      document.getElementById('order').remove()


    } 
    
  }