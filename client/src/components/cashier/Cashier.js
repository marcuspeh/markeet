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
    <div style={{ marginTop: "2rem" }} className="grid">
      hi
      <Container>
        <Row>
          <Col sm={10}>
            <Row>
              <Cart />
            </Row>
            <Row
              style={{
                position: "relative",
                height: "50vh",
                overflow: "auto",
                width: "58vw",
              }}
            >
              {inventory ? (
                inventory.map((product) => (
                  // <tr display="flex" flex-wrap="wrap">
                  //   <td display="block" flex="1">
                  <InventoryDisplay key={product._id} product={product} />
                  /* </td>
                    </tr> */
                ))
              ) : (
                <Loader />
              )}
            </Row>
          </Col>
          <Col>
            <Row>
              <Receipt />
            </Row>
            <Row>
              <Checkout />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cashier;
