import { Grid } from '@mui/material'
import React from 'react'
import SingaleProduct from '../../components/productList/SingaleProduct';

export default function ProductLists({ products }) {
    return (
        <Grid container spacing={1} >
            {products.map((val, key) => {
                return <Grid key={key} item xs={3}
                >
                    <div>
                        <SingaleProduct
                            name={val.productName}
                            price={val.price}
                            isAvailabelSize={val.size}
                            type={val.productType}
                            images={[val.images]} />

                    </div>
                </Grid>

            })}
        </Grid>
    )
}
