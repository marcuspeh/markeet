import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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
    <table
      class="body-wrap"
      margin="0"
      padding=" 0"
      box-sizing="border-box"
      font-size="14px"
    >
      <tbody>
        <tr>
          <td></td>
          <td class="container" width="600">
            <div class="content">
              <table class="main" width="100%" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td class="content-wrap aligncenter">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tbody>
                          <tr>
                            <td class="content-block">
                              <h2>Receipt</h2>
                            </td>
                          </tr>
                          <tr>
                            <td class="content-block">
                              <table class="invoice">
                                <tbody>
                                  <tr>
                                    <td>
                                      <table>
                                        <tbody>
                                          {receipt ? (
                                            receipt.map((product) => (
                                              <tr>
                                                <td>{product.title}:</td>
                                                <td>
                                                  $
                                                  {product.cost *
                                                    product.cartQuantity}
                                                </td>
                                              </tr>
                                            ))
                                          ) : (
                                            <tr></tr>
                                          )}

                                          <tr class="total">
                                            <td class="alignright" width="80%">
                                              Total
                                            </td>
                                            <td class="alignright">${total}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Receipt;
