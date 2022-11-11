import axios from "axios";

export const GET_ALL_PHONES = "GET_ALL_PHONES";
export const GET_PHONE_BY_ID = "GET_PHONE_BY_ID";
export const POST_CART = "POST_CART";
export const CLEAN_DETAILS = "CLEAN_DETAILS";

// const URL = process.env.REACT_APP_URL

export function getAllPhones() {
  return async function (dispatch) {
    const response = await axios.get('https://front-test-api.herokuapp.com/api/product');
    console.log("respuesta",response.data);
    return dispatch({
      type: GET_ALL_PHONES,
      payload: response.data,
    });
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    const response = await axios.get(`https://front-test-api.herokuapp.com/api/product/${id}`);
    console.log("respuesta",response.data);
    return dispatch({
      type: GET_PHONE_BY_ID,
      payload: response.data,
    });
  };
}

export function postCart (payload) {
  console.log("payload",payload);
  return async function (dispatch) {
    const response = await axios.post('https://front-test-api.herokuapp.com/api/cart', payload);
    console.log("respuesta",response);
    localStorage.setItem("cartNumber", JSON.stringify(response.data.count)); // info en local storage
    return dispatch({
      type: POST_CART,
      payload: response.data.count,
    });
  };
}


export function cleanDetails() {
  return {
    type: CLEAN_DETAILS,
  };
}


