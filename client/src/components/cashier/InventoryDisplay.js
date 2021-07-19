import { Card, Button } from "react-bootstrap";
import { addToCart } from "./../../actions/cartActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const InventoryDisplay = ({ product }) => {
  const { title, price, quantity, category, picture } = product;
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const dispatch = useDispatch();

  const plusButton = (productQuantity) => {
    if (quantityToAdd === "") {
      setQuantityToAdd(0);
    }
    if (quantityToAdd < productQuantity) {
      setQuantityToAdd(quantityToAdd + 1);
    }
  };

  const minusButton = () => {
    if (quantityToAdd === "") {
      setQuantityToAdd(0);
    }
    if (quantityToAdd - 1 > 0) {
      setQuantityToAdd(quantityToAdd - 1);
    }
  };

  const handleQuantityClick = (totalQuantity) => {
    const newQuantity = prompt("What's the new quantity?");
    if (newQuantity <= totalQuantity && newQuantity > 0) {
      setQuantityToAdd(newQuantity);
    }
  };

  return (
    <Card
      key={product._id}
      border="dark"
      style={{ width: "12rem", margin: "0.5rem" }}
      className="box"
    >
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>
          <b>{title}</b>
        </Card.Title>
        <Card.Text>
          Category: {category} <br />
          Price: {price} <br />
          Quantity: {quantity} <br />
        </Card.Text>

        <form>
          <Button
            variant="outline-dark"
            style={{ width: "25%" }}
            onClick={() => minusButton()}
          >
            -
          </Button>
          <input
            type="numeric"
            style={{
              width: "40%",
              textAlign: "center",
              paddingTop: "0.2em",
              paddingBottom: "0.5em",
            }}
            value={quantityToAdd}
            onChange={(event) => {
              const newQuantity = event.target.value;
              const newQuantityInt = parseInt(event.target.value, 10);

              if (newQuantity === "") {
                setQuantityToAdd("");
              } else if (newQuantityInt <= quantity && newQuantityInt >= 0) {
                setQuantityToAdd(newQuantityInt);
              }
            }}
          />
          <Button
            variant="outline-dark"
            style={{ wdith: "30%" }}
            onClick={() => plusButton(quantity)}
          >
            +
          </Button>
        </form>

        <Button
          style={{ marginTop: "0.5rem" }}
          variant="primary"
          onClick={() => {
            if (quantityToAdd === "") {
              setQuantityToAdd(0);
            }
            if (quantityToAdd > 0) {
              dispatch(addToCart({ product }, { quantityToAdd }));
            }
          }}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

/*
BUTTON ONCLICK SEND ITEM INFO TO GLOBAL STATE.CART
DESIGN A CARTACTION AND REDUCERS TO SEND INFO TO STATE.CART
THEN IN CART.JS -> USE A USEEFFECT HOOK TO UPDATE THE CART WHENEVER STATE.CART CHANGES
AND ALSO USE A USESTATE HOOK TO UPDATE THE CART CURRENTLY AND THEN WHEN IT CHANGES (MAYBE CAN BE IN USEEFFECT HOOK TOO) UPDATE WINDOW.LOCALSTORAGE("CART")
*/

export default InventoryDisplay;
