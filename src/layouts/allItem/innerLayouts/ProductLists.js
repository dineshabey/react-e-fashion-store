import { Grid } from '@mui/material'
import React from 'react'
import SingaleProduct from '../../../components/productList/SingaleProduct';
import { Link } from 'react-router-dom';

export default function ProductLists({ products }) {

    return (
        <Grid container spacing={1} >
            {products
                .map((val, key) => {
                    return <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                        <Link to={'/details'}  state={val} style={{ textDecoration: 'none', color: 'black' }}>
                            <SingaleProduct
                                name={val.productName}
                                price={val.price}
                                isAvailabelSize={val.size}
                                type={val.productType}
                                images={[val.images]}
                            />

                        </Link>
                    </Grid>

                })}
        </Grid>
    )
}
