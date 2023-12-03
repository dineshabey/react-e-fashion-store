import React from 'react'
import CommonWrapperLayouts from '../common/CommonWrapperLayouts'
import { useSelector } from 'react-redux'

export default function Cart() {
    const cartReducer = useSelector(store => store.cartReducer);
    console.log(cartReducer);
    return (
        <CommonWrapperLayouts>
            <h2>
                Cart Page
            </h2>
        </CommonWrapperLayouts>
    )
}
