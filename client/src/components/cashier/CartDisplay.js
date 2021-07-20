import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { removeFromCart } from "./../../actions/cartActions";

const CartDisplay = ({ product }) => {
  const dispatch = useDispatch();

  const [quantityToRemove, setQuantityToRemove] = useState(1);

  const plusButton = (productQuantity) => {
    if (quantityToRemove === "") {
      setQuantityToRemove(0);
    }
    if (quantityToRemove < productQuantity) {
      setQuantityToRemove(quantityToRemove + 1);
    }
  };

  const minusButton = () => {
    if (quantityToRemove === "") {
      setQuantityToRemove(0);
    }
    if (quantityToRemove - 1 > 0) {
      setQuantityToRemove(quantityToRemove - 1);
    }
  };

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
            value={quantityToRemove}
            onChange={(event) => {
              const newQuantity = event.target.value;
              const newQuantityInt = parseInt(event.target.value, 10);
              if (newQuantity === "") {
                setQuantityToRemove("");
              } else if (
                newQuantityInt <= product.cartQuantity &&
                newQuantityInt >= 0
              ) {
                setQuantityToRemove(newQuantityInt);
              }
            }}
          />

          {/* onClick={() => handleQuantityClick(product.cartQuantity)} */}
          <Button
            style={{ width: "22%", padding: "auto" }}
            variant="outline-dark"
            onClick={() => plusButton(product.cartQuantity)}
          >
            +
          </Button>
        </form>
      </td>
      <td>
        <Button
          variant="danger"
          style={{
            height: "2em",
            paddingTop: "0",
            paddingBottom: "0",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          onClick={() => {
            if (quantityToRemove === "") {
              setQuantityToRemove(0);
            }
            if (quantityToRemove <= product.cartQuantity) {
              dispatch(removeFromCart({ product }, { quantityToRemove }));
            }
          }}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
};
export default CartDisplay;
