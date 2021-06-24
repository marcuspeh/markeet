import axios from "axios";

import {
  GET_ERRORS,
  GET_INVENTORY_REQUEST,
  GET_INVENTORY_SUCCESS,
  GET_INVENTORY_FAIL,
  SET_INVENTORY,
  SET_PRODUCT,
} from "./types";

// Get inventory
export const getInventory = () => (dispatch) => {
  try {
    axios.get("/api/inventory/getInventory").then((res) =>
      dispatch({
        type: SET_INVENTORY,
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

// Get inventory for cashier page
export const getInventoryCashier = () => (dispatch) => {
  dispatch({
    type: GET_INVENTORY_REQUEST,
  });

  axios
    .get("/api/inventory/getInventory")
    .then((res) =>
      dispatch({
        type: GET_INVENTORY_SUCCESS,
        payload: res.data.product,
      })
    )
    .catch((error) => {
      dispatch({
        type: GET_INVENTORY_FAIL,
        payload: error.response.data,
      });
    });
};

//Add inventory
export const addInventory = (userData, history) => (dispatch) => {
  axios
    .post("/api/inventory/addInventory", userData)
    .then((res) =>
      dispatch({
        type: SET_INVENTORY,
        payload: res.data.product,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Add inventory via csv
export const addInventoryCSV = (userData, history) => (dispatch) => {
  for (var entry in userData) {
    console.log(userData[entry]);
    axios
      .post("/api/inventory/addInventory", userData[entry])
      .then((res) =>
        dispatch({
          type: SET_INVENTORY,
          payload: res.data.product,
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

//Get product
export const getProduct = (userData, history) => (dispatch) => {
  axios
    .post("/api/inventory/getProduct", userData)
    .then((res) =>
      dispatch({
        type: SET_PRODUCT,
        payload: res.data.product,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Edit product
export const editProduct = (userData, history) => (dispatch) => {
  axios
    .post("/api/inventory/editProduct", userData)
    .then((res) =>
      dispatch({
        type: SET_INVENTORY,
        payload: res.data.product,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Delete product
export const deleteProduct = (userData, history) => (dispatch) => {
  axios
    .post("/api/inventory/deleteProduct", userData)
    .then((res) =>
      dispatch({
        type: SET_INVENTORY,
        payload: res.data.product,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
