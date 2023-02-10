import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from 'react-router-dom'
import CartItems from '../components/Cart/CartContent'

const CartPage = () => {
    const { cart } = useCartContext();
    if (cart.length < 1) {
        return (
            <Wrapper className="page-100">
                <div className="empty">
                    <h2>Your cart is empty</h2>
                    <Link to='/products' className="btn">
                        fill it
                    </Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <Wrapper className='page'>
            <CartItems></CartItems>
        </Wrapper>
    )
}

const Wrapper = styled.div`
min-height: 50vh;
.empty {
    margin-top: 5rem;
    text-align: center;
    h2 {
        margin-bottom: 1rem;
        text-transform: none;
    }
}
`

export default CartPage;