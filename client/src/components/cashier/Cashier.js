import React, { useEffect } from "react";
import Cart from "./Cart";
import InventoryDisplay from "./InventoryDisplay";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryCashier } from "./../../actions/inventoryActions";
import { Loader } from "./Loader";
import Checkout from "./Checkout";
import Receipt from "./Receipt";

const Cashier = () => {
  const dispatch = useDispatch();

  const { inventory, inventorySuccess } = useSelector(
    (state) => state.inventory
  );
  const { checkoutSuccess } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getInventoryCashier());
  }, [dispatch, checkoutSuccess, inventorySuccess]);

  return (
    <div style={{ marginTop: "1rem" }} className="grid">
      <Container>
        <Row>
          <Col xs={10}>
            <Cart />
            <br />
            <Row
              style={{
                position: "relative",
                height: "49vh",
                overflow: "auto",
                width: "90%",
              }}
            >
              {inventory ? (
                inventory.map((product) => (
                  <InventoryDisplay key={product._id} product={product} />
                ))
              ) : (
                <Loader />
              )}
            </Row>
          </Col>
          <Col xs={2}>
            <div
              style={{
                position: "relative",
                height: "70vh",
                overflow: "auto",
              }}
            >
              <Receipt />
            </div>
              <Checkout />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cashier;
