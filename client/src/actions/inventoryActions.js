import axios from "axios";

import {
    GET_ERRORS,
    SET_INVENTORY
} from "./types";


// Get inventory
export const getInventory = () => dispatch => {
    axios
        .get("/api/inventory/getInventory")
        .then(res => 
            dispatch ({
                type: SET_INVENTORY,
                payload: res
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
