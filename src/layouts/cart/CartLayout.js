import React, { useEffect } from 'react'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material';

export default function CartLayout() {
    const cartReducer = useSelector(store => store.cartReducer);
    const { cart } = cartReducer;
    console.log(cart)

    useEffect(() => {
        let total = 0
        cart.forEach(val => {
            total = total + val.product.price * val.order.qty;
        });
        console.log('Total', total);
    }, []);

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
