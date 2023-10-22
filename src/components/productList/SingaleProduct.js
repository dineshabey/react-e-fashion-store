import React from 'react'
import ProductImage from './singaleProduct/ProductImage'
import ProductPrice from './singaleProduct/ProductPrice'
import ProductSize from './singaleProduct/ProductSize'
import ProductName from './singaleProduct/ProductName'
import { Box } from '@mui/material'

export default function SingaleProduct() {
    return (
        <Box sx={{ p: 1 }}>

            <ProductImage />
            <ProductName />
            <ProductPrice />
            <ProductSize />
            
        </Box>
    )
}
