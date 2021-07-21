import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { removeFromCart, addToCart } from "./../../actions/cartActions";

const CartDisplay = ({ product }) => {
  const dispatch = useDispatch();

  const [quantityToRemove, setQuantityToRemove] = useState(0);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [quantityInCart, setQuantityInCart] = useState(product.cartQuantity);

  const isFirstRun = useRef(true);

  const plusButton = () => {
    if (quantityToAdd + product.cartQuantity < product.quantity) {
      setQuantityToAdd(1);
    }

    dispatch(addToCart({ product }, { quantityToAdd }));
  };

  const minusButton = () => {
    setQuantityToRemove(1);

    dispatch(removeFromCart({ product }, { quantityToRemove }));
  };

  useEffect(() => {
    if (product.cartQuantity <= product.quantity) {
      setQuantityInCart(product.cartQuantity);
    } else {
      setQuantityInCart(product.quantity);
    }
  }, [product.cartQuantity, product.quantity]);

  useEffect(() => {
    if (!isFirstRun.current) {
      dispatch(addToCart({ product }, { quantityToAdd }));
      setQuantityToAdd(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, quantityToAdd, product.quantity]);

  useEffect(() => {
    if (!isFirstRun.current) {
      if (product.cartQuantity > 0) {
        dispatch(removeFromCart({ product }, { quantityToRemove }));
      }
      setQuantityToRemove(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, quantityToRemove, product.quantity]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      console.log("first");
      return;
    }
  }, []);

  return (
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
          width: "20%",
          paddingBottom: "0px",
          paddingTop: "0vh",
        }}
      >
        <form>
          <Button
            style={{ width: "22%", padding: "auto" }}
            variant="outline-dark"
            onClick={() => minusButton()}
          >
            -
          </Button>

          <input
            type="numeric"
            style={{
              width: "35%",
              textAlign: "center",
              paddingTop: "0.15em",
              paddingBottom: "0.55em",
            }}
            value={quantityInCart}
            onChange={(event) => {
              setQuantityInCart(event.target.value);
            }}
            onBlur={(event) => {
              const newQuantity = event.target.value;
              const newQuantityInt = parseInt(event.target.value, 10);

              if (newQuantity === "") {
                setQuantityInCart(product.cartQuantity);
                return;
              } else if (newQuantityInt < 0) {
                setQuantityInCart(product.cartQuantity);
              } else if (newQuantityInt > product.quantity) {
                setQuantityToAdd(product.quantity - product.cartQuantity);
              } else if (newQuantityInt < product.cartQuantity) {
                setQuantityToRemove(product.cartQuantity - newQuantityInt);
              } else if (newQuantityInt > product.cartQuantity) {
                setQuantityToAdd(newQuantityInt - product.cartQuantity);
              }
            }}
          />
          <Button
            style={{ width: "22%", padding: "auto" }}
            variant="outline-dark"
            onClick={() => plusButton()}
          >
            +
          </Button>
        </form>
      </td>
    </tr>
  );
};
export default CartDisplay;
