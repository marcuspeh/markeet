import React, { useEffect } from "react";
import Cart from "./Cart";
import InventoryDisplay from "./InventoryDisplay";
import { Container, Row, Col, CardColumns } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInventory } from "./../../actions/inventoryActions";
import { Loader } from "./Loader";
import Checkout from "./Checkout";
import Receipt from "./Receipt";

const Cashier = () => {
  const dispatch = useDispatch();

  const { inventory } = useSelector((state) => state.inventory);
  const { checkoutSuccess } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getInventory());
  }, [dispatch, checkoutSuccess]);

  return (
    <div style={{ marginTop: "2rem" }} className="grid">
      hi
      <Container>
        <Row>
          <Col sm="11">
            <Cart />
          </Col>
          <Col sm="1">
            <Receipt />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md="10">
            <CardColumns style={{ display: "flex", flexDirection: "row" }}>
              {!inventory ? (
                <Loader />
              ) : (
                inventory.map((product) => (
                  <InventoryDisplay product={product} />
                ))
              )}
            </CardColumns>
          </Col>
          <Col md="4">
            <Checkout />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cashier;
