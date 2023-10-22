import React from 'react'
import ProductImage from './singaleProduct/ProductImage'
import ProductPrice from './singaleProduct/ProductPrice'
import ProductSize from './singaleProduct/ProductSize'
import ProductName from './singaleProduct/ProductName'

export default function SingaleProduct() {
    return (
        <div>
            <ProductImage />
            <ProductName />
            <ProductPrice />
            <ProductSize />
        </div>
    )
}
