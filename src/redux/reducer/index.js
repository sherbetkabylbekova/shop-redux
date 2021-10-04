import {ADD_TO_CART, GET_CATALOG, REMOVE_FROM_CART, REMOVE_QUANTITY} from "../actions";

const initialState = {
    catalog: [],
    cart: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOG:
            return {...state, catalog: action.payload}
        case ADD_TO_CART:
            const findProduct = state.cart.find(el => el.id === action.payload.id)
            if (findProduct) {
                return {
                    ...state,
                    cart: state.cart.map(el => el.id === findProduct.id ? {
                        ...findProduct,
                        quantity: findProduct.quantity + 1
                    } : el)
                }
            }
            return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(el => el.id !== action.payload)}
        case REMOVE_QUANTITY:
            const smaller = state.cart.find(el => el.id === action.payload.id)
            if (smaller.quantity > 1) {
                return {
                    ...state,
                    cart: state.cart.map(el => el.id === smaller.id ? {
                        ...smaller,
                        quantity: smaller.quantity - 1
                    } : el)
                }
            }
            return state
        default:
            return state
    }
}