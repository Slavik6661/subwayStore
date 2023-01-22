import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../FoodCounterComponent/counterComponent.jsx";
import "../../../static/style/products-list.css";
import { modalSum, cardInfo } from "../../store/store.js";

const FoodCard = (props) => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menuCategory);
  const idOrder = useSelector((state) => state.idOrder);
  const currentPageProducts = useSelector((state) => state.currentPageProducts);
  let selectedCardInfo = useSelector((state) => state.selectedCardInfo);
  const [count, setCount] = useState(0);

  let idCard = props.idCard;
  const carInfo = () => {
    selectedCardInfo = {};
    currentPageProducts[idCard].weight = count;
    currentPageProducts[idCard]["idCard"] = idCard;
    dispatch(cardInfo(currentPageProducts[idCard]));
  };
  const addProductInBucket = () => {
    if (activeMenuItem === "sandwiches") {
      dispatch({ type: "MODAL_STATE", payload: true });
      dispatch(modalSum(props.elem.price));
      carInfo();
    } else {
      let orderObj = {
        id: idOrder,
        foodName: props.elem.name,
        amountFood: count,
        foodPrice: props.elem.price,
      };

      dispatch({ type: "ADD_PRODUCT_BUCKET", payload: orderObj });
      dispatch({ type: "INCREMENT_ID_ORDER" });
    }
  };
  const onCountChange = (count) => {
    console.log("count", count);
    setCount(count);
  };

  return (
    <>
      <div id={`food-card-` + idCard} className="food-card">
        <div id="logo-food">
          <img src="https://logos-marques.com/wp-content/uploads/2021/03/Subway-Logo-2048x1158.png" />
        </div>

        <div id={"photo-food-" + idCard} className="photo-food">
          <div className="backgroundFood">
            <img src={`/static/` + props.elem.image} />
          </div>
        </div>

        <div id="description-food">
          <div id={"name-food-" + idCard} className="name-food">
            <p>{props.elem.name}</p>
          </div>
          <hr />

          <div className="ingredients1">
            <a id="add-ingredients" href="#">
              {props.elem.description}
            </a>
          </div>
          <hr />
          <div id={`price-` + idCard}>
            <p>Цена:{props.elem.price}</p>
            <br />
          </div>
        </div>
        <div id="buy-food">
          <p>Количество</p>
          <div id="counter">
            <Counter idCard={idCard} onChange={onCountChange} />
          </div>
          <button
            type="button"
            id={"button-buy-" + idCard}
            className="button-buy"
            //data={}
            onClick={() => {
              addProductInBucket();
            }}
          >
            В КОРЗИНУ
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;

// import Counter from "../FoodCounterComponent/counterComponent";

//class FoodCard {
//   counter;

//   constructor() {
//     this.counter = new Counter();
//   }

//   render(, element) {
//     let html = "";
//     html +=
//       /* html */
//       `
//       <div id="food-card-${}" class="food-card">
//         <div id="logo-food">
//         <img src=https://logos-marques.com/wp-content/uploads/2021/03/Subway-Logo-2048x1158.png></div>

//         <div id="photo-food-${}" class='photo-food'>
//         <div class='backgroundFood'>
//         <img src="/static/${element.image}">
//         </div>
//         </div>

//         <div id="description-food">
//           <div id ='name-food-${idCard}',class='name-food'>
//             <p>${element.name}</p>
//           </div>
//             <hr>

//           <div class='ingredients1'>
//             <a id="add-ingredients" href="#">${element.description}</a>
//           </div>
//             <hr>
//               <div id='price-${idCard}'>
//                   <p>Цена:${element.price}</p><br>
//               </div>
//             </div>
//                 <div id="buy-food">
//                 <p>Количество</p>
//                 <div id='counter'>
//               ${this.counter.render(idCard)}
//                 </div>
//                 <button type="button" id="button-buy-${idCard}" class='button-buy'  data='${idCard}' >В КОРЗИНУ</button>
//                 </div>
//       </div>

//       `;
//     return html;
//   }
// }
// export default FoodCard;
