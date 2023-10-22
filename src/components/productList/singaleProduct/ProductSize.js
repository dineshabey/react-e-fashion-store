import { Grid, Typography } from '@mui/material'
import React from 'react'

const defaultSize = ['XS', 'S', 'M', 'L', 'XL'];

export default function ProductSize() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      {defaultSize.map((val, key) => {
        return <Grid item key={key} xs={2} >
          <div style={{
            border: '2px solid teal',
            borderRadius: '7px',
            backgroundColor: 'black',
            color: 'white',
          }}>
            <Typography >
              {val}
            </Typography>
          </div>
        </Grid>
      })}
      <Grid item xs={1}></Grid>
    </Grid>
  )
}
