import React from "react";
import { useSelector, useDispatch, useState } from "react-redux";
const Order = (props) => {
  const dispatch = useDispatch();
  const ordersArray = useSelector((state) => state.ordersArray);
  let order = props.order;
  let id = props.id;
  const deleteProduct = (id) => {
    dispatch({ type: "DELETE_PRODUCT_BUCKET", payload: id });
    console.log(ordersArray);
  };

  return (
    <>
      <div className="order" id={"order-" + id}>
        <div className="nameFood">
          <p>{order.foodName}</p>
        </div>
        <wbr />
        <div className="countFood">
          <p>{order.amountFood}</p>
        </div>

        <div className="delete-products">
          <button
            id={"delete_products-" + id}
            className="delete-products-order"
            onClick={() => deleteProduct(order.id)}
          />
        </div>
      </div>
    </>
  );
};

export default Order;
