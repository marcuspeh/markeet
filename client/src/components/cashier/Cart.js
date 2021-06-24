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
          height: "32vh",
          overflow: "auto"
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
                  <td style={{ paddingBottom: "1.2vh", paddingTop: "1.2vh" }}>
                    <b>{product.title}</b>
                  </td>
                  <td
                    style={{
                      paddingLeft: "22px",
                      paddingBottom: "1.2vh",
                      paddingTop: "1.2vh",
                    }}
                  >
                    {product.category}
                  </td>
                  <td style={{ paddingBottom: "1.2vh", paddingTop: "1.2vh" }}>
                    ${product.price * product.cartQuantity}
                  </td>
                  <td
                    style={{
                      paddingLeft: "26px",
                      paddingBottom: "1.2vh",
                      paddingTop: "1.2vh",
                    }}
                  >
                    {product.cartQuantity}
                  </td>
                  <td
                    style={{
                      width: "20%",
                      paddingBottom: "0px",
                      paddingTop: "0vh",
                    }}
                  >
                    <Button
                      variant="danger"
                      style={{
                        height: "2em",
                        paddingTop: "0",
                        paddingBottom: "0",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                      onClick={() => dispatch(removeFromCart({ product }))}
                    >
                      Remove one
                    </Button>
                  </td>
                </tr>
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
