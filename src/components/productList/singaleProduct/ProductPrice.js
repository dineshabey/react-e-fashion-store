import { Typography } from '@mui/material'
import React from 'react'

export default function ProductPrice({ price }) {
  return (
    <Typography>
      <strong>
        {price}
      </strong>
    </Typography>
  )
}
