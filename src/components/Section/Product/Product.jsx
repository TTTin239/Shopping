import React from 'react';
import { Link } from "react-router-dom";
import {products} from './data';

export default function Product() {
    return (
      <div className="bg-info">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Featured Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" style={{cursor: 'pointer'}}>
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-500 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-900">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
            <Link to='/products' className=' text-gray-900 btn btn-primary mt-10'>
                All Products
            </Link>
        </div>
      </div>
    );
}