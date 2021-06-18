import axios from "axios";

import {
    GET_ERRORS,
    GET_SALES
  } from "./types";

// Get sales
export const getSales = () => (dispatch) => {
    try {
      axios.get("/api/cashier/getSales").then((res) =>
        dispatch({
          type: GET_SALES,
          payload: res.data.product,
        })
      );
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data,
      });
    }
  };