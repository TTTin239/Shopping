import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartItems = () => {
    const { cart } = useCartContext();
    return (
        <Wrapper className="section section-center">
            {cart.map((item) => {
                return <CartItem key={item.id} {...item} />
            })}
            <hr/>
            <div className="link-container">
                <Link to='/products' className="link-btn">
                    continue shopping
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin-top: 3rem;
.link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
}
.link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-family: 400;
    cursor: pointer;
}
`

export default CartItems;