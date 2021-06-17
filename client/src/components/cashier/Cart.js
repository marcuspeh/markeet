import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export const Cart = () => {
  const dispatch = useDispatch();
  const localStorageCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const storeCart = useSelector((state) => state.cart.cartItems);
  const [currentCart, setCart] = useState(localStorageCart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cartItems")));
  }, [storeCart]);

  // console.log(currentCart.length);

  return (
    <div>
      <div
        class="table-wrapper-scroll-y"
        style={{
          position: "relative",
          height: "200px",
          overflow: "auto",
          width: "60vw",
        }}
      >
        <table class="table table-bordered table-striped mb-0">
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
                <tr>
                  <th scope="row">{product.title}</th>
                  <td>{product.category}</td>
                  <td>{product.price * product.cartQuantity}</td>
                  <td>{product.cartQuantity}</td>
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
            {/* {
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            } */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
