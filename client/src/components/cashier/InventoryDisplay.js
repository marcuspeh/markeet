import { Card, Button } from "react-bootstrap";
import { addToCart } from "./../../actions/cartActions";
import { useDispatch } from "react-redux";

export const InventoryDisplay = ({ product }) => {
  const { title, price, quantity, category } = product;
  const dispatch = useDispatch();

  return (
    <Card
      key={product._id}
      border="dark"
      style={{ width: "18rem" }}
      className="box"
    >
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Category: {category} <br />
          Price: {price} <br />
          Quantity: {quantity} <br />
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(addToCart({ product }));
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
