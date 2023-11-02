import React from 'react'
import CommonWrapperLayouts from './common/CommonWrapperLayouts'
import { Box, Grid } from '@mui/material'
import ImageSlider from '../components/productDetails/ImageSlider'
import ProductDetailsSections from '../layouts/productsDetails/ProductDetailsSections';
export default function ProductDetailsLayouts() {
    return (
        <CommonWrapperLayouts>
            <Box sx={{textAlign:'left'}}>
                <Grid container justifyContent={'flex-start'}>
                    <Grid item xs={5}>
                        <ImageSlider />
                    </Grid>
                    <Grid item xs={7}>
                        <ProductDetailsSections />
                    </Grid>

                </Grid>
            </Box>
        </CommonWrapperLayouts>
    )
}
