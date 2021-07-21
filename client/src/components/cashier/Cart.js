import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartDisplay from "./CartDisplay";

export const Cart = ({ inventory }) => {
  const localStorageCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const storeCart = useSelector((state) => state.cart.cartItems);
  const [currentCart, setCart] = useState(localStorageCart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cartItems")));
  }, [storeCart]);

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "32vh",
          overflow: "auto",
        }}
      >
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {currentCart ? (
              currentCart.map((product) => (
                <CartDisplay key={product._id} product={product} />
              ))
            ) : (
              <tr>
                <th scope="row">Nothing</th>
                <td>Here</td>
                <td>:)</td>
                <td>lol</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
