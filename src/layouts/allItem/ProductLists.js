import { Grid } from '@mui/material'
import React from 'react'
import SingaleProduct from '../../components/productList/SingaleProduct';


export default function ProductLists({produt}) {
    return (
        <Grid container spacing={1}>
            {produt.map((val, key) => {
                return <Grid key={key} item xs={3} >
                    <div style={{ backgroundColor: key % 2 === 0 ? 'orange' : 'skyblue' }}>
                        <SingaleProduct />
                    </div>
                </Grid>
            })}
        </Grid>
    )
}
