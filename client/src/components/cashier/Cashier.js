import React, { useEffect } from "react";
import Cart from "./Cart";
import InventoryDisplay from "./InventoryDisplay";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryCashier } from "./../../actions/inventoryActions";
import { Loader } from "./Loader";
import Checkout from "./Checkout";
import Receipt from "./Receipt";
import { updateCartItems } from "../../actions/cartActions";

const Cashier = () => {
  const dispatch = useDispatch();

  const { inventory, inventorySuccess } = useSelector(
    (state) => state.inventory
  );
  const { checkoutSuccess } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getInventoryCashier());
    if (inventory) {
      const localStorageCart = JSON.parse(localStorage.getItem("cartItems"));
      if (localStorageCart) {
        localStorageCart.map((product) => {
          for (const child in inventory) {
            const index = parseInt(child, 10);
            if (product._id === inventory[index]._id) {
              product.quantity = inventory[index].quantity;
            }
          }
          return NaN;
        });
        localStorage.setItem("cartItems", JSON.stringify(localStorageCart));
      }
      dispatch(updateCartItems());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, checkoutSuccess, inventorySuccess]);

  return (
    <div style={{ marginTop: "1rem" }} className="grid">
      <Container>
        <Row>
          <Col xs={10}>
            <Cart inventory={inventory} />
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
