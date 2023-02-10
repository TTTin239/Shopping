import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/actionTypes"

const cart_reducer = (state, action) => {
    if (action.type === ADD_PRODUCT) {
        const { id, amount, product } = action.payload
        const tempItem = state.cart.find((i) => i.id === +id)
        if (tempItem) {
            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id) {
                    let newAmount = cartItem.amount + amount
                    if (newAmount > cartItem.max) {
                        newAmount = cartItem.max
                    }
                    return { ...cartItem, amount: newAmount }
                } else {
                    return cartItem
                }
            })
            return { ...tempCart, cart: tempCart }
        } else {
            const newItem = {
                id: id,
                name: product.name,
                amount,
                Image: product.imageSrc,
                price: product.price,
            }
            return { ...state, cart: [...state.cart, newItem] }
        }
    }
    if (action.type === DELETE_PRODUCT) {
        const newcart = state.cart
        const objIndex = newcart.filter((obj) => obj.id === action.payload.id)
        newcart.splice(objIndex, 1)
        return { ...state, cart: [...newcart] }
    }
}

export default cart_reducer