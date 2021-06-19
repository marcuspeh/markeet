import axios from "axios";

import {
    GET_ERRORS,
    GET_PROFILE,
    UPDATE_PROFILE
} from "./types";

//Get user
export const getProfile = (userData, history) => dispatch => {
    axios
        .get("/api/users/getUser", userData)
        .then(res => 
            dispatch ({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//Update name
export const updateName = (userData, history) => dispatch => {
    axios
        .post("/api/users/updatename", userData)
        .then(res => 
            dispatch ({
                type: UPDATE_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//Update email
export const updateEmail = (userData, history) => dispatch => {
    axios
        .post("/api/users/updateEmail", userData)
        .then(res => 
            dispatch ({
                type: UPDATE_PROFILE,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })

        );
};

//Update password
export const updatePassword = (userData, history) => dispatch => {
    axios
        .post("/api/users/updatePassword", userData)
        .then(res => 
            dispatch ({
                type: UPDATE_PROFILE,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//Update address
export const updateAddress = (userData, history) => dispatch => {
    axios
        .post("/api/users/updateAddress", userData)
        .then(res => 
            dispatch ({
                type: UPDATE_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};