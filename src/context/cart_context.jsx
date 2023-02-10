import React, { useEffect, useContext, useReducer } from "react";
import {ADD_PRODUCT, DELETE_PRODUCT} from "../actions/actionTypes"
import cart_reducer from "../reducers/cart_reducer";

const getLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"));
    } else {
        return []
    }
}

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cart_reducer, initialState)

    // add to cart
    const addToCart = (id, amount, product) => {
        dispatch({ type: ADD_PRODUCT, payload: { id, amount, product } })
    }
    // delete item
    const removeItem = (id) => {
        dispatch({ type: DELETE_PRODUCT, payload: { id } })
    }
    
    return (
        <CartContext.Provider
            value={{ ...state, addToCart, removeItem }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}