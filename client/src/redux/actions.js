import axios from "axios";

export const GET_ALL_PHONES = "GET_ALL_PHONES";
export const GET_PHONE_BY_ID = "GET_PHONE_BY_ID";

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

