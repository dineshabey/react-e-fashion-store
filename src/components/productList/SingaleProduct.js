import React from 'react'
import ProductImage from './singaleProduct/ProductImage'
import ProductPrice from './singaleProduct/ProductPrice'
import ProductSize from './singaleProduct/ProductSize'
import ProductName from './singaleProduct/ProductName'
import { Box } from '@mui/material'



export default function SingaleProduct({ name, price, size, type,images }) {
    return (
        <Box sx={{ p: 3 }}>
            <ProductImage images={images} />
            <Box sx={{ mt: 2 }}>
                <ProductName name={name} type={type} />
            </Box>
            <ProductPrice price={price} />
            <ProductSize size={size} />

        </Box>
    )
}
