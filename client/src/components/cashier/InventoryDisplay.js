import { Card, Button } from "react-bootstrap";

export const InventoryDisplay = ({ title, price, quantity, category }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>{category}</p>
          <p>{price}</p>
          <p>{quantity}</p>
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default InventoryDisplay;
