import { Grid } from '@mui/material'
import React from 'react'

export default function ProductLists() {
    return (
        <Grid container>
            <Grid item xs={3}>
                <div style={{ backgroundColor: 'skyblue' }}>
                    <h2>Product</h2>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{ backgroundColor: 'yellow' }}>
                    <h2>Product</h2>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{ backgroundColor: 'red' }}>
                    <h2>Product</h2>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{ backgroundColor: 'orange' }}>
                    <h2>Product</h2>
                </div>
            </Grid>

        </Grid>
    )
}
