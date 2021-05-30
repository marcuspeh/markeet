import axios from "axios";

import {
    GET_ERRORS,
    SET_INVENTORY,
    SET_PRODUCT
} from "./types";


// Get inventory
export const getInventory = () => dispatch => {
    axios
        .get("/api/inventory/getInventory")
        .then(res => 
            dispatch ({
                type: SET_INVENTORY,
                payload: res.data.product
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//Add inventory
export const addInventory = (userData, history) => dispatch => {
    axios
        .post("/api/inventory/addInventory", userData)
        .then(res => 
            dispatch ({
                type: SET_INVENTORY,
                payload: res.data.product
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//Get product
export const getProduct = (userData, history) => dispatch => {
    axios
        .post("/api/inventory/getProduct", userData)
        .then(res => 
            dispatch ({
                type: SET_PRODUCT,
                payload: res.data.product
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//Edit product
export const editProduct = (userData, history) => dispatch => {
    axios
        .post("/api/inventory/editProduct", userData)
        .then(res => 
            dispatch ({
                type: SET_INVENTORY,
                payload: res.data.product
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
