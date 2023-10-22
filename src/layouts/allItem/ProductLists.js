import { Grid } from '@mui/material'
import React from 'react'

const products = [
    1, 2, 3, 4,5,6,7,8,9,10
];

export default function ProductLists() {
    return (
        <Grid container>
            {products.map((val, key) => {
                return <Grid key={key} item xs={3}>
                    <div style={{ backgroundColor: key % 2 === 0 ? 'orange': 'skyblue' }}>
                        <h2>Product {val}</h2>
                    </div>
                </Grid>
            })}
        </Grid>
    )
}
