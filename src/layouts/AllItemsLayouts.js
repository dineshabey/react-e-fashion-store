import React from 'react'
import HeaderLayouts from './common/HeaderLayouts'
import FotterLayouts from './common/FotterLayouts'
import { Grid } from '@mui/material'
import ProductsFilters from './allItem/ProductsFilters'
import ProductLists from './allItem/ProductLists'

export default function AllItemsLayouts() {
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
