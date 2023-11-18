import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid, Typography } from '@mui/material'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'
import ImageSlider from '../../components/productDetails/ImageSlider'
import ProductDetailsSections from './innerLayouts/ProductDetailsSections';

const productData = {
    images: [
        'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/officeBlackJacket/alireza-esmaeeli-jnGOm2WBLJs-unsplash-min.jpg',
        'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/officeBlackJacket/alireza-esmaeeli-jnGOm2WBLJs-unsplash-min.jpg',
    ],
    productName: "product 01",
    productType: 'Dress',
    price: '7200.00',
    size: ['xs', 's'],
    availableQty: 100,
    description: "Crafted from high-quality, silky-smooth fabric that drapes beautifully.",
};

export default function ProductDetailsLayouts() {
    // const matches = useMediaQuery('(max-width:800px)');
    const matches = true;
    return (
        <CommonWrapperLayouts>
            <Box sx={{
                textAlign: 'left', border: '4px solid teal', marginTop: '40px', padding: '20px', borderRadius: '20px'
            }}>
                 {matches ? (  <Grid container justifyContent={'flex-start'}>
                    <Grid item xs={12} md={6} lg={5}>
                        <ImageSlider images={productData.images} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} sx={{ pl: 4 }}>
                        <ProductDetailsSections
                            productName={productData.productName}
                            productType={productData.productType}
                            price={productData.price}
                            size={productData.size}
                            productDescription={productData.description}
                            availableQty={productData.availableQty}
                        />
                    </Grid>

                </Grid>):(

                    <Typography>Hi i'm small</Typography>
                 )

            
            }



              
            </Box>
        </CommonWrapperLayouts>
    )
}
