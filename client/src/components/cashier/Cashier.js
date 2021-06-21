import React, { useEffect } from "react";
import Cart from "./Cart";
import InventoryDisplay from "./InventoryDisplay";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInventory } from "./../../actions/inventoryActions";
import { Loader } from "./Loader";
import Checkout from "./Checkout";

const Cashier = () => {
  const dispatch = useDispatch();

  const { inventory } = useSelector((state) => state.inventory);
  const { checkoutSuccess } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getInventory());
  }, [dispatch, checkoutSuccess]);

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
          <Col>
            {!inventory ? (
              <Loader />
            ) : (
              inventory.map((product) => <InventoryDisplay product={product} />)
            )}
          </Col>
          <Col xs={2}>
            <Checkout />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cashier;
