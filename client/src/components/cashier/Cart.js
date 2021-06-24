import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { removeFromCart } from "./../../actions/cartActions";

export const Cart = () => {
  const dispatch = useDispatch();
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
          height: "200px",
          overflow: "auto",
          width: "58vw",
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
                <tr key={product._id}>
                  <th scope="row">{product.title}</th>
                  <td>{product.category}</td>
                  <td>{product.price * product.cartQuantity}</td>
                  <td>{product.cartQuantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeFromCart({ product }))}
                    >
                      Remove from cart
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              // <Loader />
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
