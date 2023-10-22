import React from 'react'
import ProductImage from './singaleProduct/ProductImage'
import ProductPrice from './singaleProduct/ProductPrice'
import ProductSize from './singaleProduct/ProductSize'
import ProductName from './singaleProduct/ProductName'
import { Box } from '@mui/material'

const images = [
    'https://radikadilanka.com/rdfashion/static/media/product18.8cbfe59a.jpg',
    'https://radikadilanka.com/rdfashion/static/media/product118.8609b05b.jpg'
]

export default function SingaleProduct() {
    return (
        <Box sx={{ p: 3 }}>

            <ProductImage images={images} />
            <Box sx={{ mt: 2 }}>
                <ProductName name={'Product 01'} type={'Dress'} />
            </Box>
            <ProductPrice />
            <ProductSize />

        </Box>
    )
}
