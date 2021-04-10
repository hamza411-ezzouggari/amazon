import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div className="Checkout">
      {basket.length === 0 ? (
        <div>
          <h2>Your Shopping basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2>Your Shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Checkout;
