import axios from "axios";

export const GET_CATALOG = 'GET_CATALOG';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_QUANTITY = 'REMOVE_QUANTITY';

export const removeQuantity = (el) => {
    return {type: "REMOVE_QUANTITY", payload: el}
}
export const addToCart = (el) => {

    return ({type: "ADD_TO_CART", payload:el})
}
export const removeFromCart = (el) => {
  return({type:"REMOVE_FROM_CART", payload: el.id})
}

export const getCatalog = () => {
   return (dispatch) => {
       axios('https://614851a8035b3600175b9d9e.mockapi.io/api/catalog')
           .then(({data}) => {
               return dispatch({type:GET_CATALOG, payload:data})
           })
   }
}