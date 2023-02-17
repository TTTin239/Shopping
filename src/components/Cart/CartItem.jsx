import React from 'react'
import styled from 'styled-components'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../../context/cart_context'

const CartItem = ({ id, Image, name, price, amount }) => {
    const { removeItem } = useCartContext()
    return (
        <Wrapper>
            <div className="title">
                <img src={Image} alt={name}/>
                <div>
                    <h5 className='name'>{name}</h5>
                    <h5 className='price-small'>{price}</h5>
                </div>
            </div>
            <h5 className='subtotal'>{price}</h5>
            <button className='remove-btn' onClick={() => removeItem(id)}>
                <FaTrash/>
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.article`
.subtotal {
    display: none;
}
.price {
    display: none;
}
display: grid;
grid-template-columns: 200px auto auto;
grid-template-rows: 75px;
gap: 3rem 1rem;
justify-items: center;
margin-bottom: 3rem;
align-items: center;
.title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: center;
    gap: 1rem;
}
img {
    width: 120%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
}
h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
}
.price-small {
    color: var(--clr-primary-5);
}
.remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
}
@media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 120%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
}
`
export default CartItem 