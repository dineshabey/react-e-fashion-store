import React from 'react'
import CommonWrapperLayouts from './common/CommonWrapperLayouts'
import { Box, Grid } from '@mui/material'
import ImageSlider from '../components/productDetails/ImageSlider'
import ProductDetailsSections from '../layouts/productsDetails/ProductDetailsSections';


export default function ProductDetailsLayouts() {
    const productData = {
        images: [
            'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/more_than_2/cream-pink-short-dress/32914991182_5480a1fe1b_c.jpg',
            'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/more_than_2/cream-pink-short-dress/32914991182_5480a1fe1b_c.jpg',
        ],
        productName: "product 01",
        productType: 'Dress',
        price: '7200.00',
        size: ['xs', 's'],
        availableQty:100,
        description: "Crafted from high-quality, silky-smooth fabric that drapes beautifully, this frock offers supreme comfort and a touch of opulence. You'll be the epitome of grace and elegance with every step you take.",
    };

    return (

        <CommonWrapperLayouts>
            <Box sx={{
                textAlign: 'left',
                border: '3px solid teal',
                borderRadius: '10px',
                marginTop: '40px',
                padding: '10px'
            }}>
                <Grid container justifyContent={'flex-start'}>
                    <Grid item xs={5}>
                        <ImageSlider images={productData.images} />
                    </Grid>
                    <Grid item xs={7} pl={2}>
                        <ProductDetailsSections
                            productName={productData.productName}
                            productType={productData.productType}
                            price={productData.price}
                            size={productData.size}
                            productDescription={productData.description}
                            availableQty={productData.availableQty}
                        />
                    </Grid>

                </Grid>
            </Box>
        </CommonWrapperLayouts>
    )
}
