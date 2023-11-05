import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import QtySelectSection from './qtyAndPriceSection/QtySelectSection'
import formatNumberWithCommas from '../../../util/functions';

export default function QtyAndPriceSections({ price }) {
  const [qty, setQty] = useState(1);
  const handleQtyChange = (newQty) => {
    setQty(newQty);
  }

  return (
    <Grid container justifyContent={'space-between'}>
      <Grid item xs={12}>
        <Typography>Quantity of the selected size</Typography>
      </Grid>
      <Grid item xs={6}>
        <QtySelectSection handleQtyChange={handleQtyChange} qty={qty} />
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'end' }}>
        <Typography>
         LKR : {formatNumberWithCommas(price * qty)}
        </Typography>
      </Grid>
    </Grid>
  )
}
