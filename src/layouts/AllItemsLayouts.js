import React, { useEffect, useState } from 'react'
import HeaderLayouts from './common/HeaderLayouts'
import FotterLayouts from './common/FotterLayouts'
import { Grid, Typography } from '@mui/material'
import ProductsFilters from './allItem/ProductsFilters'
import ProductLists from './allItem/ProductLists'
import axios from 'axios'





export default function AllItemsLayouts() {

    const [loadingStatus, setLoadingStatus] = useState('notStarted');
    const [produts, setProducts] = useState([]);

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
            <HeaderLayouts />
            <Grid container>
                <Grid item xs={2}>
                    <div style={{ backgroundColor: 'yellow' }}>
                        <ProductsFilters />
                    </div>

                </Grid>
                <Grid item xs={10}>
                    <div style={{ backgroundColor: 'teal' }}>
                        {loadingStatus === 'loading' ? (
                            <Typography>Loading ...</Typography>) :
                            loadingStatus === 'completed' ? (
                                produts.length > 0 ? (
                                    <ProductLists produt={produts}></ProductLists>
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
            <FotterLayouts />
        </div >
    )
}
