import { Typography } from '@mui/material'
import React from 'react'
import formatNumberWithCommas from '../../util/functions'

export default function PriceComponets({ value }) {
    return (
        <Typography sx={{ color: 'red', fontWeight: 'bold', fontSize: '25px' }} >LKR : {formatNumberWithCommas(value)} </Typography>
    )
}
