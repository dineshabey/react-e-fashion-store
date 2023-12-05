import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import ProductsFilters from './innerLayouts/ProductsFilters'
import ProductLists from './innerLayouts/ProductLists'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../../store/actions/productAction'



export default function AllItemsLayouts() {

    const dispatch = useDispatch();
    const { productDataLoadingStatus: loadingStatus, productList: products } = useSelector(store => store.productStore);
    useEffect(() => { //componets did mount
        if (loadingStatus !== 'completed') {
            dispatch(fetchProductData());
        }
    }, [loadingStatus])

    return (
        <div>
            <CommonWrapperLayouts>
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <div style={{ backgroundColor: 'yellow' }}>
                            <ProductsFilters products={products} setProducts={() => { }} />
                        </div>

                    </Grid>
                    <Grid item xs={12} md={10}>
                        <div>
                            {loadingStatus === 'loading' ? (
                                <Typography>Loading ...</Typography>) :
                                loadingStatus === 'completed' ? (
                                    products.length > 0 ? (
                                        <Box sx={{ pb: 5 }}>
                                            <ProductLists products={products}></ProductLists>

                                        </Box>
                                    ) : (
                                        <Typography>No Products</Typography>
                                    )) :
                                    loadingStatus === 'error' ? (
                                        <Typography>loading error</Typography>) :
                                        (
                                            ""
                                        )
                            }
                        </div>
                    </Grid>
                </Grid>
            </CommonWrapperLayouts>
        </div>
    )
}
