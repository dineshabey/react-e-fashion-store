import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import axios from 'axios'
import ProductsFilters from './innerLayouts/ProductsFilters'
import ProductLists from './innerLayouts/ProductLists'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'



export default function AllItemsLayouts() {

    const [loadingStatus, setLoadingStatus] = useState('notStarted');
    const [products, setProducts] = useState([]);

    useEffect(() => { //componets did mount

        setLoadingStatus('loading');
        axios.get('https://cdn.radikadilanka.com:9000/getProducts').then((response) => {
            setLoadingStatus('completed');
            setProducts(response.data);
        }).catch((e) => {
            setLoadingStatus('error');
            console.log(e)
        })
    }, [])

    return (
        <div>
            <CommonWrapperLayouts>
                <Grid container>
                    <Grid item xs={12} md={2}>
                        <div style={{ backgroundColor: 'yellow' }}>
                            <ProductsFilters products={products} setProducts={setProducts}/>
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
