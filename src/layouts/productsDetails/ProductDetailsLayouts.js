
import React from 'react';
import { Box, Grid } from '@mui/material'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'
import ImageSlider from '../../components/productDetails/ImageSlider'
import ProductDetailsSections from './innerLayouts/ProductDetailsSections';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/actions/cartAction';


const productData = {
    images: [
        'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/officeBlackJacket/alireza-esmaeeli-jnGOm2WBLJs-unsplash-min.jpg',
        'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/officeBlackJacket/alireza-esmaeeli-jnGOm2WBLJs-unsplash-min.jpg',
    ],

};




export default function ProductDetailsLayouts() {
    let { state } = useLocation();
    const product = state;
    const dispatch = useDispatch();

    const handleAddToCard = (size, qty) => {
        if (size === undefined) {
            alert('Please select size !');
            return;
        }
        dispatch(addProductToCart({
            product,
            order: {
                qty,
                size,
            }
        }))
    };


    return (
        <CommonWrapperLayouts>
            <Box sx={{
                textAlign: 'left', border: '4px solid teal', marginTop: '40px', padding: '20px', borderRadius: '20px'
            }}>
                {<Grid container justifyContent={'flex-start'}>
                    <Grid item xs={12} md={6} lg={5}>
                        <ImageSlider images={productData.images} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} sx={{ pl: 4 }}>
                        <ProductDetailsSections
                            handleAddToCard={handleAddToCard}
                            productName={product.productName}
                            productType={product.productType}
                            price={product.price}
                            size={product.size}
                            productDescription={product.description}
                            availableQty={product.availableQty}
                        />
                    </Grid>



                </Grid>
                }
            </Box>
        </CommonWrapperLayouts>
    )
}
