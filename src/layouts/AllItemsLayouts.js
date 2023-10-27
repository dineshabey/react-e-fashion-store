import React, { useEffect } from 'react'
import HeaderLayouts from './common/HeaderLayouts'
import FotterLayouts from './common/FotterLayouts'
import { Grid } from '@mui/material'
import ProductsFilters from './allItem/ProductsFilters'
import ProductLists from './allItem/ProductLists'
import axios from 'axios'





export default function AllItemsLayouts() {

    useEffect(() => { //componets did mount
        axios.get('https://cdn.radikadilanka.com:9000/getProducts').then((response) => {
            console.log(response.data);
        }).catch((e) => {
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
                        <ProductLists />
                    </div>
                </Grid>
            </Grid>
            <FotterLayouts />
        </div>
    )
}
