import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../../context/cart_context";
// import { connect } from "react-redux";
// import { buyProduct } from "../../actions/actions";

function AddToCart({ product }) {
    const { addToCart } = useCartContext()
    const [amount, setAmount] = useState(1);
    // const product_current = {
    //     id: product.id,
    //     name: product.name,
    //     price: product.price,
    // }
    const { id } = product;
    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            return tempAmount
        })
    }
    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if (tempAmount < 1){
                tempAmount = 1
            }
            return tempAmount
        })
    }
    return (
        <Wrapper>
            <div className="btn-container">
                <AmountButtons
                    increase={increase}
                    decrease={decrease}
                    amount={amount}
                />

                <Link
                    to='/cart'
                    className='btn border '
                    // onClick={() => product.buyProduct(product_current)}
                    onClick={() => addToCart(+id, amount, product)}
                >
                    add to cart
                </Link>
            </div>
        </Wrapper>
    );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyProduct: (product_current) => dispatch(buyProduct(product_current)),
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart.cartAr,
//     }
// }

const Wrapper = styled.section`
    margin-top: 2rem;
    margin-bottom: 2rem;
    .btn{
        margin-top: 1rem;
        width: 140px;
        color: blue;
        border-color: rgb(59 130 246);
    }
    .btn:hover{
        color: white;
        background-color: rgb(59 130 246);
    }
`
// export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
export default AddToCart;