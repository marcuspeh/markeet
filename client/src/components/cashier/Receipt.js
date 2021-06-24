import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import Loader from "./Loader";

const Receipt = () => {
  const localStorageCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [receipt, setReceipt] = useState(localStorageCart);
  const { cartItems } = useSelector((state) => state.cart);
  let initialTotal = 0;

  receipt.map(
    (product) => (initialTotal += product.cost * product.cartQuantity)
  );

  const [total, setTotal] = useState(initialTotal);

  useEffect(() => {
    let subtotal = 0;
    receipt.map((product) => (subtotal += product.cost * product.cartQuantity));
    setTotal(subtotal);
    if (JSON.stringify(receipt) !== localStorage.getItem("cartItems")) {
      setReceipt(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, [cartItems, receipt]);

  return (
    <ListGroup>
      <h2>Receipt</h2>
      {receipt ? (
        receipt.map((product) => (
          <ListGroup.Item key={product._id}>
            {product.title}: ${product.cost * product.cartQuantity}
          </ListGroup.Item>
        ))
      ) : (
        <Loader />
      )}
      <ListGroup.Item>Total: ${total}</ListGroup.Item>
    </ListGroup>
  );
};
export default Receipt;
