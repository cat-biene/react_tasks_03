import React from 'react';
import { Product } from '../../types/Product';

export default function ProductItem({id, title, price, count, isBIO}: Product) {
  return (
    <div>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>price: {price}</p>
        <p>count: {count}</p>
        <p>BIO: {isBIO}</p>
    </div>
  )
}