import React from 'react'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material';

export default function CartLayout() {
    const cartReducer = useSelector(store => store.cartReducer);
    const { cart } = cartReducer;
    console.log(cart);
    return (
        <CommonWrapperLayouts>
            {cart.map((val, key) => {
                return <div>
                    <Typography>
                        {val.product.productName}
                    </Typography>
                    <Typography>
                        {val.size}
                    </Typography>
                    <Typography>
                        {val.qty}
                    </Typography>
                </div>
            })}
        </CommonWrapperLayouts>
    )
}
