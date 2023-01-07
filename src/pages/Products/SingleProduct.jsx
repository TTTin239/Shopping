import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../components/Section/Product/data";
import './SingleProduct.css';
import AddToCart from '../../components/Cart/AddToCart'

export default function SingleProduct() {
    const { productId } = useParams()
    const product = products.find((product) => product.id === +productId);
    const { name, imageSrc, imageAlt, price, color } = product
    return (
        <div className='single-product'>
            <img src={imageSrc} alt={imageAlt} className='singleIg' />
            <div className='single-product-info'>
                <h2>{name}</h2>
                <h4 className="price">
                    {price}
                </h4>
                <h5 className="color">
                    <div className='Color'>Color:</div>
                    {color}
                </h5>
                <hr />
                <AddToCart product={product} />
                <hr />
                <Link to='/products' className='text-gray-900 btn btn-primary mt-10'>
                    Back to product
                </Link>
            </div>
        </div>
    );
}
