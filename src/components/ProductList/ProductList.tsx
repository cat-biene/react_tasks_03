import React from 'react'
import { Product } from '../../types/Product'
import ProductItem from '../ProductItem/ProductItem';



export default function ProductList() {

    const products: Product[] = [
        { id: 1, title: 'milk', price: 1, count: 5, isBIO: 'BIO' },
        { id: 2, title: 'bread', price: 2, count: 10 },
        { id: 3, title: 'eggs', price: 3, count: 15 },
        { id: 4, title: 'cheese', price: 4, count: 8, isBIO: 'BIO' },
        { id: 5, title: 'yogurt', price: 2, count: 20, isBIO: 'BIO' }
    ];

    return (
        <div>
            {
                products.map((product) => <ProductItem key={product.id} {...product} />)
            }
        </div>
    )
}