import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import InventoryDisplay from "./InventoryDisplay";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInventory } from "./../../actions/inventoryActions";
import { Loader } from "./Loader";

const Cashier = () => {
  const dispatch = useDispatch();

  const { inventory } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(getInventory());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "2rem" }}>
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
            inventory.map((product) => <InventoryDisplay product={product} />)
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cashier;
