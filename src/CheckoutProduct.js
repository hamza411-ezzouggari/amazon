import React from "react";

function CheckoutProduct({ id, title, price, image, rating }) {
  return (
    <div className="CheckoutProduct">
      <img src={image} alt="" />
    </div>
  );
}
export default CheckoutProduct;
