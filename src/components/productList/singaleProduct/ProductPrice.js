import formatNumberWithCommas from '../../../util/functions';
import { Typography } from '@mui/material'
import React from 'react'

export default function ProductPrice({ price }) {
  return (
    <Typography>
      <strong>
       LKR {formatNumberWithCommas(price)}
      </strong>
    </Typography>
  )
}
