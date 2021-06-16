import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import InventoryDisplay from "./InventoryDisplay";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInventory } from "./../../actions/inventoryActions";
import { Loader } from "./Loader";

const Cashier = () => {
  const dispatch = useDispatch();

  const currentCart = JSON.parse(window.localStorage.getItem("cart")) || [];

  const { inventory } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(getInventory());
  }, [dispatch]);

  return (
    <div>
      hi
      <Container>
        <Row>
          <Cart />
        </Row>
      </Container>
      <Container>
        <Row>
          {!inventory ? (
            <Loader />
          ) : (
            inventory.map((product) => (
              <InventoryDisplay
                title={product.title}
                quantity={product.quantity}
                price={product.price}
                category={product.category}
              />
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cashier;
