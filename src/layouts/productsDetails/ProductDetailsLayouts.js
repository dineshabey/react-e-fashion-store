
// import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'
import ImageSlider from '../../components/productDetails/ImageSlider'
import ProductDetailsSections from './innerLayouts/ProductDetailsSections';
import { useLocation } from 'react-router-dom';


const productData = {
    images: [
        'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/officeBlackJacket/alireza-esmaeeli-jnGOm2WBLJs-unsplash-min.jpg',
        'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/officeBlackJacket/alireza-esmaeeli-jnGOm2WBLJs-unsplash-min.jpg',
    ],
   
};

export default function ProductDetailsLayouts() {
    // const matches = useMediaQuery('(max-width:800px)');
    const matches = true;

    let { state } = useLocation();
    console.log(state);
    const  product  = state;
    return (
        <CommonWrapperLayouts>
            <Box sx={{
                textAlign: 'left', border: '4px solid teal', marginTop: '40px', padding: '20px', borderRadius: '20px'
            }}>
                {matches ? (<Grid container justifyContent={'flex-start'}>
                    <Grid item xs={12} md={6} lg={5}>
                        <ImageSlider images={productData.images} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} sx={{ pl: 4 }}>
                        <ProductDetailsSections
                            productName={product.productName}
                            productType={product.productType}
                            price={product.price}
                            size={product.size}
                            productDescription={product.description}
                            availableQty={product.availableQty}
                        />
                    </Grid>

                </Grid>) : (

                    <Typography>Hi i'm small</Typography>
                )


                }




            </Box>
        </CommonWrapperLayouts>
    )
}
