import { Grid } from '@mui/material'
import React from 'react'
import SingaleSizeBox from './productSize/SingaleSizeBox';

const defaultSize = ['XS', 'S', 'M', 'L', 'XL'];

export default function ProductSize() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      {defaultSize.map((val, key) => {
        return <Grid item key={key} xs={2} >
          <SingaleSizeBox size={val} />
        </Grid>
      })}
      <Grid item xs={1}></Grid>
    </Grid>
  )
}
